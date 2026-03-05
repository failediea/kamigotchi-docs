import { ethers } from "ethers";

// ============================================================
// Config
// ============================================================
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
if (!PRIVATE_KEY) {
  console.error("Missing PRIVATE_KEY env var");
  process.exit(1);
}

const RECIPIENT_EVM = process.env.RECIPIENT_EVM || "0x8F8A3c74DC951859de6e6Eb5E357f6C226b79A38";
const RECIPIENT_INITIA = process.env.RECIPIENT_INITIA || "init1379rcaxuj5v9nhnwd667x4lkcgnt0x3cpfqtr3";
const BRIDGE_AMOUNT = ethers.parseEther(process.env.BRIDGE_AMOUNT_ETH || "0.0001");
const OFT_ADDRESS = "0x66a503a1060ab3f2b1aaabed613fe30babbc1bde"; // NativeOFTAdapter on Base
const DST_EID = 30326; // Initia L1 LayerZero endpoint ID
const BASE_RPC = process.env.BASE_RPC || "https://mainnet.base.org";

// LayerZero receiver on Initia L1
const FORWARDING_CONTRACT = "0xe81950cf0154b9379ea0636552bc6b54bb0356ff5435c23990f54314e77f9cf4";

// ETH denom on Initia L1 (output of Base OFT receive)
const MOVE_ETH_DENOM = "move/edfcddacac79ab86737a1e9e65805066d8be286a37cb94f4884b892b0e39f954";
// ETH denom on Yominet expected by the unwrap bridge contract
const YOMINET_IBC_ETH_DENOM = "ibc/39026A3BC5B3135CAC7FA5551C286A05E215FDA2C3C79195EB73F6699696F4FF";
const IBC_CHANNEL = "channel-25";
const YOMINET_UNWRAP = "0x4eb08D5c1B0A821303A86C7b3AC805c2793dE783";
const TO_LOCAL_MODE = 6; // Matches router-generated calldata

// ============================================================
// ABI
// ============================================================
const OFT_ABI = [
  "function send((uint32 dstEid, bytes32 to, uint256 amountLD, uint256 minAmountLD, bytes extraOptions, bytes composeMsg, bytes oftCmd) _sendParam, (uint256 nativeFee, uint256 lzTokenFee) _fee, address _refundAddress) payable returns ((bytes32 guid, uint64 nonce, uint256 amountLD, uint256 amountSentLD))",
  "function quoteSend((uint32 dstEid, bytes32 to, uint256 amountLD, uint256 minAmountLD, bytes extraOptions, bytes composeMsg, bytes oftCmd) _sendParam, bool _payInLzToken) view returns ((uint256 nativeFee, uint256 lzTokenFee))",
];

// ============================================================
// Build compose message:
// 1) Initia L1 IBC transfer to Yominet
// 2) IBC memo triggers Yominet unwrap contract `toLocal(...)`
// ============================================================
function buildComposeMsg(recipientEvm, senderInitia, amountScaled) {
  const unwrapIface = new ethers.Interface([
    "function toLocal(address recipient, string denom, uint8 mode)",
  ]);
  const unwrapCalldata = unwrapIface.encodeFunctionData("toLocal", [
    recipientEvm,
    YOMINET_IBC_ETH_DENOM,
    TO_LOCAL_MODE,
  ]);

  const evmMemo = JSON.stringify({
    evm: {
      message: {
        contract_addr: YOMINET_UNWRAP,
        input: unwrapCalldata,
      },
    },
  });

  const timeoutNs = BigInt(Date.now() + 3_600_000) * 1_000_000n; // 1 hour
  const msgTransfer = {
    "@type": "/ibc.applications.transfer.v1.MsgTransfer",
    memo: evmMemo,
    receiver: YOMINET_UNWRAP,
    sender: senderInitia,
    source_channel: IBC_CHANNEL,
    source_port: "transfer",
    timeout_height: { revision_height: "0", revision_number: "0" },
    timeout_timestamp: timeoutNs.toString(),
    token: { amount: amountScaled.toString(), denom: MOVE_ETH_DENOM },
  };

  return ethers.toUtf8Bytes(JSON.stringify(msgTransfer));
}

// Router-generated options for Base ETH -> Yominet ETH path
const EXTRA_OPTIONS = "0x000301001101000000000000000000000000000f4240010013030000000000000000000000000000000f4240010013030000000000000000000000000000000f4240";

async function main() {
  const provider = new ethers.JsonRpcProvider(BASE_RPC);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const oft = new ethers.Contract(OFT_ADDRESS, OFT_ABI, wallet);

  console.log("Wallet:", wallet.address);
  const balance = await provider.getBalance(wallet.address);
  console.log("Balance:", ethers.formatEther(balance), "ETH on Base");

  // Scale: 18 decimals on Base -> 6 decimals on Initia (1e12 factor)
  const amountLD = BRIDGE_AMOUNT;
  const amountScaled = Number(BRIDGE_AMOUNT / 1_000_000_000_000n);

  console.log("Bridge amount:", ethers.formatEther(amountLD), "ETH");
  console.log("Scaled amount for Initia IBC token:", amountScaled);

  const composeMsgBytes = buildComposeMsg(RECIPIENT_EVM, RECIPIENT_INITIA, amountScaled);
  const composeMsgHex = ethers.hexlify(composeMsgBytes);

  console.log("\nCompose message (JSON):");
  console.log(Buffer.from(composeMsgBytes).toString("utf8"));

  const sendParam = {
    dstEid: DST_EID,
    to: FORWARDING_CONTRACT,
    amountLD,
    minAmountLD: amountLD,
    extraOptions: EXTRA_OPTIONS,
    composeMsg: composeMsgHex,
    oftCmd: "0x",
  };

  const [nativeFee, lzTokenFee] = await oft.quoteSend(sendParam, false);
  console.log("\nLZ native fee:", ethers.formatEther(nativeFee), "ETH");

  const totalValue = amountLD + nativeFee;
  console.log("Total cost:", ethers.formatEther(totalValue), "ETH");

  if (balance < totalValue + ethers.parseEther("0.000003")) {
    console.error("Insufficient balance");
    process.exit(1);
  }

  if (process.env.DRY_RUN === "1") {
    console.log("\nDRY_RUN=1 set, skipping send.");
    return;
  }

  console.log("\nSending bridge TX...");
  const tx = await oft.send(
    sendParam,
    { nativeFee, lzTokenFee },
    wallet.address,
    { value: totalValue }
  );

  console.log("TX hash:", tx.hash);
  console.log("Waiting for confirmation...");
  const receipt = await tx.wait();
  console.log("Confirmed in block:", receipt.blockNumber);
  console.log("\nTrack:");
  console.log("https://layerzeroscan.com/tx/" + tx.hash);
}

main().catch((err) => {
  console.error("Error:", err?.message || err);
  if (err?.data) console.error("Data:", err.data);
  process.exit(1);
});
