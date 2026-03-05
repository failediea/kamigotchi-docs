# Yominet Bridge (Working Route)

This folder stores the working Base -> Initia L1 -> Yominet flow that unwraps to the local Yominet ETH-denom token contract.

## Files

- `bridge-live.mjs`: working sender script (no hardcoded private key)
- `last-success.json`: last known successful run metadata

## Install

```bash
cd /home/matrix/kamigotchi-docs/tools/yominet-bridge
npm init -y
npm i ethers
```

## Run (dry-run first)

```bash
export PRIVATE_KEY='YOUR_BASE_PRIVATE_KEY'
export DRY_RUN=1
node bridge-live.mjs
```

## Run live send

```bash
export PRIVATE_KEY='YOUR_BASE_PRIVATE_KEY'
unset DRY_RUN
node bridge-live.mjs
```

## Optional env vars

- `RECIPIENT_EVM` default: `0x8F8A3c74DC951859de6e6Eb5E357f6C226b79A38`
- `RECIPIENT_INITIA` default: `init1379rcaxuj5v9nhnwd667x4lkcgnt0x3cpfqtr3`
- `BRIDGE_AMOUNT_ETH` default: `0.0001`
- `BASE_RPC` default: `https://mainnet.base.org`

## Notes

- This route deposits to Yominet token contract `0xE1Ff7038eAAAF027031688E1535a055B2Bac2546` (not native gas ETH).
- The old wrapped token (`l2/...`) is contract `0xFe4Bb04ED0906942a37DE4A1C2142219d9fC1150`.
