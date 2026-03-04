# Game Data Reference

Lookup tables for game indices used across Kamigotchi systems. These values come from the deployment state at `packages/contracts/deployment/world/data/`.

> **Note:** Game data is defined in CSV sheets and deployed on-chain via admin systems. The tables below reflect the current live deployment. For the most up-to-date data, query the on-chain components directly.

---

## Items

Items are identified by a `uint32` index. The on-chain entity ID for an item is `keccak256("registry.item", index)`.

### Currencies & Tickets

| Index | Name | Type | Description |
|-------|------|------|-------------|
| 1 | MUSU | Misc | Kamigotchi kurrency — the primary in-game currency |
| 10 | Gacha Ticket | Misc | Redeemable for one Kami at the vending machine |
| 11 | Reroll Ticket | Misc | Allows you to reroll a Kami once |
| 100 | Onyx Shard | ERC20 | Premium game currency ($ONYX) |

### Raw Materials

| Index | Name | Type | Rarity |
|-------|------|------|--------|
| 1001 | Wooden Stick | Material | Common |
| 1002 | Stone | Material | Common |
| 1003 | Plastic Bottle | Material | Uncommon |
| 1004 | Pine Cone | Material | Uncommon |
| 1005 | Scrap Metal | Material | Common |
| 1006 | Glass Jar | Material | Rare |
| 1007 | Red Amber Crystal | Material | Epic |
| 1010 | Black Poppy | Material | Rare |
| 1011 | Daffodil | Material | Uncommon |
| 1012 | Mint | Material | Epic |
| 1013 | Sanguine Shroom | Material | Uncommon |
| 1014 | Chalkberry | Material | Uncommon |
| 1015 | Obol | Misc | Uncommon |
| 1016 | Dried Stems | Material | Common |
| 1017 | Patinated Pipe | Material | Common |
| 1018 | Cigarette Butt | Material | Common |
| 1019 | Otherworld Coin | Material | Uncommon |
| 1020 | Bone Chunk | Material | Common |
| 1021 | Irradiated Root | Material | Rare |

### Processed Materials

| Index | Name | Type | Rarity |
|-------|------|------|--------|
| 1102 | Empty Cup | Material | Uncommon |
| 1103 | Microplastics | Material | Uncommon |
| 1104 | Pine Pollen | Material | Uncommon |
| 1107 | Powdered Red Amber | Material | Epic |
| 1110 | Black Poppy Extract | Material | Rare |
| 1111 | Essence of Daffodil | Material | Uncommon |
| 1112 | Shredded Mint | Material | Epic |
| 1113 | Sanguineous Powder | Material | Uncommon |
| 1114 | Berry Chalk | Material | Uncommon |
| 1121 | Pallid Root Extract | Material | Rare |
| 1201 | Holy Syrup | Material | Rare |
| 1202 | Resin Tincture | Material | Uncommon |
| 1203 | Fuliginous Ooze | Material | Epic |
| 1301 | Ashlar | Material | Uncommon |
| 1302 | Timber | Material | Uncommon |
| 1303 | Ingot | Material | Uncommon |

### Essences

| Index | Name | Type | Rarity |
|-------|------|------|--------|
| 6001 | Essence of Hearing | Material | Rare |
| 6002 | Essence of Smell | Material | Rare |
| 6003 | Essence of Sight | Material | Rare |
| 6004 | Essence of Taste | Material | Rare |
| 6005 | Essence of Touch | Material | Rare |
| 6006 | Essence of Thought | Material | Rare |
| 6007 | Pure Essence | Material | Epic |

### Kami Consumables (selected)

| Index | Name | Type | Effect |
|-------|------|------|--------|
| 11001 | Red Ribbon Gummy | Revive | Revive + HP+10 |
| 11003 | Djed Pillar | Consumable | Revive + HP+5 |
| 11004 | Pale Potion | Potion | Revive + HP+75 |
| 11011 | Holy Dust | Misc | Rename a Kami at the shrine |
| 11020 | Cleaning Fluid | Potion | Clear all effects |
| 11110 | Gaokerena Mochi | Food | Permanent Health +10 |
| 11120 | Sunset Apple Mochi | Food | Permanent Power +1 |
| 11130 | Kami Mochi | Food | Permanent Violence +1 |
| 11140 | Mana Mochi | Food | Permanent Harmony +1 |
| 11201 | XP Candy (Small) | Food | HP+5, XP+25 |
| 11301 | Maple-Flavor Ghost Gum | Food | HP+25 |
| 11302 | Cheeseburger | Food | HP+50 |
| 11304 | Gakki Cookie Sticks | Food | HP+100 |
| 11311 | Resin | Food | HP+35 |
| 11312 | Honeydew Scale | Food | HP+75 |
| 11313 | Golden Apple | Food | HP+150 |
| 11401 | XP Potion | Food | XP+1000 |
| 11403 | Respec Potion | Misc | Reset skill points |
| 11404 | Grace Potion | Food | Strain -25% next harvest |
| 11405 | Bless Potion | Food | Bounty +25% next harvest |
| 11409 | Energy Drink | Food | Cooldown -30s |

### Operator Consumables (selected)

| Index | Name | Type | Effect |
|-------|------|------|--------|
| 21001 | Giftbox | Lootbox | Basic lootbox |
| 21002 | Citizen Giftbox | Lootbox | Passport-tier lootbox |
| 21003 | Wonder Egg | Lootbox | Surprise lootbox |
| 21004 | Booster Pack | Lootbox | Spell Card booster |
| 21005 | Mochibox | Lootbox | Contains one Mochi |
| 21201 | Ice Cream | Food | Stamina +20 |
| 21202 | Better Ice Cream | Food | Stamina +40 |
| 21203 | Best Ice Cream | Food | Stamina +80 |

### Tools

| Index | Name | Type | Rarity |
|-------|------|------|--------|
| 23100 | Spice Grinder | Tool | Rare |
| 23101 | Portable Burner | Tool | Rare |
| 23102 | Screwdriver | Tool | Epic |

### Key Items (selected)

| Index | Name | Description |
|-------|------|-------------|
| 100001 | Astrolabe Disk | Golden disk resembling an astrolabe tympan |
| 100004 | Aetheric Sextant | Divines things beyond mortal perception |
| 100005 | Pyramid Engine | Ancient Egyptian-style electrical generator |
| 100010 | Dowsing Rod | Senses traces of crystal power |

> **Total items in deployment:** ~130+. The full list is defined in `packages/contracts/deployment/world/data/items/items.csv`.

---

## Rooms

Rooms are identified by a `uint32` index. On-chain entity ID: `keccak256("room", roomIndex)`.

| Index | Name | Exits | Zone |
|-------|------|-------|------|
| 1 | Misty Riverside | 20 | Surface |
| 2 | Tunnel of Trees | 13 | Surface |
| 3 | Torii Gate | — | Surface |
| 4 | Vending Machine | — | Surface |
| 5 | Restricted Area | — | Surface |
| 6 | Labs Entrance | 28 | Surface |
| 9 | Forest: Old Growth | — | Surface |
| 10 | Forest: Insect Node | — | Surface |
| 11 | Temple by the Waterfall | 24, 15 | Surface |
| 12 | Scrap Confluence | — | Surface |
| 13 | Convenience Store | 2 | Interior |
| 15 | Temple Cave | 11 | Caves |
| 16 | Techno Temple | — | Caves |
| 18 | Cave Crossroads | — | Caves |
| 19 | Temple of the Wheel | 59 | Caves |
| 25 | Lost Skeleton | — | Surface |
| 26 | Trash-Strewn Graves | — | Surface |
| 29 | Misty Forest Path | — | Surface |
| 30 | Scrapyard Entrance | — | Surface |
| 31 | Scrapyard Exit | — | Surface |
| 32 | Road To Labs | — | Surface |
| 33 | Forest Entrance | — | Surface |
| 34 | Deeper Into Scrap | — | Surface |
| 35 | Elder Path | — | Surface |
| 36 | Parting Path | — | Surface |
| 37 | Hollow Path | — | Surface |
| 47 | Scrap Paths | — | Surface |
| 48 | Murky Forest Path | — | Surface |
| 49 | Clearing | — | Surface |
| 50 | Ancient Forest Entrance | — | Surface |
| 51 | Scrap-Littered Undergrowth | — | Surface |
| 52 | Airplane Crash | 54 | Surface |
| 53 | Blooming Tree | — | Surface |
| 54 | Plane Interior | 52 | Interior |
| 55 | Shady Path | — | Surface |
| 56 | Butterfly Forest | — | Surface |
| 57 | River Crossing | — | Surface |
| 58 | Mouth of Scrap | — | Surface |
| 59 | Black Pool | 19 | Surface |
| 60 | Scrap Trees | — | Surface |
| 61 | Musty Forest Path | — | Surface |
| 62 | Centipedes | — | Surface |
| 63 | Deeper Forest Path | — | Surface |
| 64 | Burning Room | 65 | Interior |
| 65 | Forest Hut | 64 | Surface |
| 66 | Marketplace | — | Surface |
| 67 | Boulder Tunnel | — | Caves |
| 68 | Slippery Pit | — | Caves |
| 69 | Lotus Pool | — | Caves |
| 70 | Still Stream | — | Caves |
| 71 | Shabby Deck | — | Caves |
| 72 | Hatch to Nowhere | 88 | Caves |
| 73 | Broken Tube | — | Caves |
| 74 | Engraved Door | — | Caves |
| 75 | Flood Mural | — | Caves |
| 76 | Fungus Garden | — | Caves |
| 77 | Thriving Mushrooms | — | Caves |
| 78 | Toadstool Platforms | — | Caves |
| 79 | Abandoned Campsite | — | Caves |
| 80 | Radiant Crystal | — | Caves |
| 81 | Flower Mural | — | Caves |
| 82 | Geometric Cliffs | — | Caves |
| 83 | Canyon Bridge | — | Caves |
| 84 | Reinforced Tunnel | — | Caves |
| 85 | Giant's Palm | — | Caves |
| 86 | Guardian Skull | — | Caves |
| 87 | Sacrarium | — | Caves |
| 88 | Treasure Hoard | 72 | Other World |
| 89 | Trophies of the Hunt | — | Other World |
| 90 | Scenic View | — | Other World |

> **Total rooms:** 66. Room connectivity (exits) defines the world graph. Some exits are gated by quest completion or items.

---

## Harvest Nodes

Nodes are the harvestable locations within rooms. Each node shares an index with its room. On-chain entity ID: `keccak256("node", nodeIndex)`.

| Index | Name | Affinity | Yield | Level Limit | Scav Cost |
|-------|------|----------|-------|-------------|-----------|
| 1 | Misty Riverside | Eerie | MUSU | 15 | 100 |
| 2 | Tunnel of Trees | Normal | MUSU | 15 | 100 |
| 3 | Torii Gate | Normal | MUSU | 15 | 100 |
| 5 | Restricted Area | Normal | MUSU | — | 100 |
| 6 | Labs Entrance | Eerie | MUSU | — | 100 |
| 9 | Forest: Old Growth | Insect | MUSU | — | 200 |
| 10 | Forest: Insect Node | Insect | MUSU | — | 200 |
| 12 | Scrap Confluence | Scrap | MUSU | — | 500 |
| 15 | Temple Cave | Scrap | MUSU | — | 100 |
| 16 | Techno Temple | Eerie, Scrap | MUSU | — | 500 |
| 18 | Cave Crossroads | Insect | MUSU | — | 200 |
| 19 | Temple of the Wheel | Eerie, Scrap | MUSU | — | 300 |
| 25 | Lost Skeleton | Eerie | MUSU | — | 200 |
| 26 | Trash-Strewn Graves | Eerie | MUSU | — | 100 |
| 29 | Misty Forest Path | Insect | MUSU | 15 | 100 |
| 30 | Scrapyard Entrance | Scrap | MUSU | 15 | 100 |
| 31 | Scrapyard Exit | Scrap | MUSU | — | 100 |
| 32 | Road To Labs | Normal | MUSU | — | 100 |
| 33 | Forest Entrance | Normal | MUSU | — | 200 |
| 34 | Deeper Into Scrap | Scrap | MUSU | — | 300 |
| 35 | Elder Path | Normal | MUSU | — | 200 |
| 36 | Parting Path | Insect | MUSU | — | 200 |
| 37 | Hollow Path | Normal | MUSU | — | 200 |
| 47 | Scrap Paths | Scrap | MUSU | — | 100 |
| 48 | Murky Forest Path | Insect | MUSU | — | 200 |
| 49 | Clearing | Normal | MUSU | — | 300 |
| 50 | Ancient Forest Entrance | Insect | MUSU | — | 200 |
| 51 | Scrap-Littered Undergrowth | Insect | MUSU | — | 300 |
| 52 | Airplane Crash | Eerie | MUSU | — | 300 |
| 53 | Blooming Tree | Eerie | MUSU | — | 300 |

> **Total nodes:** 67. Shown above are the first 30; for the full list see `packages/contracts/deployment/world/data/rooms/nodes.csv`. Node affinity affects harvest efficacy — match your Kami's body/hand affinities to the node affinity for bonuses.

---

## Skills

Skills are organized in four trees with six tiers each. Each skill has a `uint32` index.

### Predator Tree

| Index | Name | Tier | Max | Cost | Effect |
|-------|------|------|-----|------|--------|
| 111 | Aggression | 1 | 5 | 1 | Violence +1 |
| 112 | Grit | 1 | 5 | 1 | Health +10 |
| 113 | Mercenary | 1 | 5 | 1 | Attack Success Rate +2% |
| 121 | Professional | 2 | 5 | 1 | Attack Type Rate +5% |
| 122 | Cruelty | 2 | 5 | 1 | Attack Type Shift +2% |
| 123 | Sniper | 2 | 5 | 1 | Cooldown -10s |
| 131 | Warmonger | 3 | 1 | 1 | Violence +3 |
| 132 | Vampire | 3 | 1 | 1 | Defense Success Rate +6% |
| 133 | Bandit | 3 | 1 | 1 | Attack Success Rate +6% |
| 141 | Hungry | 4 | 5 | 1 | Power +1 |
| 142 | Brutality | 4 | 5 | 1 | Attack Type Shift +2% |
| 143 | Marksman | 4 | 5 | 1 | Cooldown -10s |
| 151 | Specialist | 5 | 5 | 1 | Attack Type Rate +5% |
| 152 | First Aid | 5 | 5 | 1 | Defense Success Rate +2% |
| 153 | Bounty Hunter | 5 | 5 | 1 | Attack Success Rate +2% |
| 161 | Warlord | 6 | 1 | 1 | Violence +5 |
| 162 | Lethality | 6 | 1 | 1 | Attack Type Shift +10% |
| 163 | Assassin | 6 | 1 | 1 | Cooldown -50s |

### Enlightened Tree

| Index | Name | Tier | Max | Cost | Effect |
|-------|------|------|-----|------|--------|
| 211 | Self Care | 1 | 5 | 1 | Rest Max Bonus +5% |
| 212 | Cardio | 1 | 5 | 1 | Health +10 |
| 213 | Good Constitution | 1 | 5 | 1 | Harvest Fertility Bonus +6% |
| 221 | Focus | 2 | 5 | 1 | Harvest Bounty Bonus +4% |
| 222 | Meditative Breathing | 2 | 5 | 1 | Defense Type Shift +2% |
| 223 | Concentration | 2 | 5 | 1 | Strain Bonus -2.5% |
| 231 | Sleep Hygiene | 3 | 1 | 1 | Rest Max Bonus +15% |
| 232 | Warmup Exercise | 3 | 1 | 1 | Harvest Intensity +15/hr |
| 233 | Advanced Mewing | 3 | 1 | 1 | Harvest Fertility Bonus +18% |
| 241 | Momentum | 4 | 5 | 1 | Harvest Bounty Bonus +4% |
| 242 | Therapy | 4 | 5 | 1 | Defense Type Shift +2% |
| 243 | Endurance | 4 | 5 | 1 | Strain Bonus -2.5% |
| 251 | Regeneration | 5 | 5 | 1 | Rest Max Bonus +5% |
| 252 | Workout Routine | 5 | 5 | 1 | Harvest Intensity +5/hr |
| 253 | Productivity | 5 | 5 | 1 | Harvest Fertility Bonus +6% |
| 261 | Wu Wei | 6 | 1 | 1 | Harvest Bounty Bonus +20% |
| 262 | Spin Class | 6 | 1 | 1 | Health +50 |
| 263 | Immortality | 6 | 1 | 1 | Strain Bonus -12.5% |

### Guardian Tree

| Index | Name | Tier | Max | Cost | Effect |
|-------|------|------|-----|------|--------|
| 311 | Defensiveness | 1 | 5 | 1 | Harmony +1 |
| 312 | Toughness | 1 | 5 | 1 | Health +10 |
| 313 | Patience | 1 | 5 | 1 | Harvest Intensity +5/hr |
| 321 | Meticulous | 2 | 5 | 1 | Defense Type Rate +5% |
| 322 | Vigor | 2 | 5 | 1 | Health +10 |
| 323 | Armor | 2 | 5 | 1 | Defense Type Shift +2% |
| 331 | Anxiety | 3 | 1 | 1 | Harmony +3 |
| 332 | Die Hard | 3 | 1 | 1 | Strain Bonus -7.5% |
| 333 | Loyalty | 3 | 1 | 1 | Harvest Intensity +15/hr |
| 341 | Flawless | 4 | 5 | 1 | Defense Type Rate +5% |
| 342 | Dedication | 4 | 5 | 1 | Harvest Intensity +5/hr |
| 343 | Shielding | 4 | 5 | 1 | Defense Type Shift +2% |
| 351 | Powerhouse | 5 | 5 | 1 | Violence +1 |
| 352 | Hefty | 5 | 5 | 1 | Health +10 |
| 353 | Fortress | 5 | 5 | 1 | Defense Type Shift +2% |
| 361 | Neurosis | 6 | 1 | 1 | Harmony +5 |
| 362 | Undying | 6 | 1 | 1 | Strain Bonus -12.5% |
| 363 | Obsession | 6 | 1 | 1 | Harvest Intensity +25/hr |

### Harvester Tree

| Index | Name | Tier | Max | Cost | Effect |
|-------|------|------|-----|------|--------|
| 411 | Acquisitiveness | 1 | 5 | 1 | Power +1 |
| 412 | Mogging | 1 | 5 | 1 | Health +10 |
| 413 | Greed | 1 | 5 | 1 | Harvest Bounty Bonus +4% |
| 421 | Wide Portfolio | 2 | 5 | 1 | Strain Bonus -2.5% |
| 422 | Side Hustles | 2 | 5 | 1 | Harvest Fertility Bonus +6% |
| 423 | Hedging | 2 | 5 | 1 | Defense Success Rate +2% |
| 431 | Technical Analysis | 3 | 1 | 1 | Power +3 |
| 432 | Daylight Savings | 3 | 1 | 1 | Defense Type Shift +6% |
| 433 | Leverage | 3 | 1 | 1 | Harvest Bounty Bonus +12% |
| 441 | Opportunist | 4 | 5 | 1 | Violence +1 |
| 442 | Trading Courses | 4 | 5 | 1 | Harvest Fertility Bonus +6% |
| 443 | Index Funds | 4 | 5 | 1 | Harmony +1 |
| 451 | Time in the Market | 5 | 5 | 1 | Strain Bonus -2.5% |
| 452 | Looping | 5 | 5 | 1 | Health +10 |
| 453 | Stimulants | 5 | 5 | 1 | Harvest Bounty Bonus +4% |
| 461 | Intelligent Investor | 6 | 1 | 1 | Power +5 |
| 462 | Paid Groupchat | 6 | 1 | 1 | Harvest Fertility Bonus +30% |
| 463 | Coward | 6 | 1 | 1 | Defense Success Rate +10% |

> **Total skills:** 72 (18 per tree × 4 trees). Tier 3 and Tier 6 skills are mutually exclusive within their row (pick 1 of 3). Each skill costs 1 skill point per level. Skill data is in `packages/contracts/deployment/world/data/skills/skills.csv`.

---

## Quests

Quests are identified by a `uint32` index. The on-chain registry entity ID is `keccak256("registry.quest", questIndex)`. When a player accepts a quest, the instance entity ID is `keccak256("quest.instance", questIndex, accountEntityId)`.

### Main Story Quests (MSQ)

| Index | Title | Prerequisite |
|-------|-------|--------------|
| 1 | Welcome to Kamigotchi World | — |
| 2 | Beginning Your Journey | MSQ 1 |
| 3 | Your First Kami | MSQ 2 |
| 4 | What Kami Do: Harvesting | MSQ 3 |
| 5 | What Kami Do: Scavenging | MSQ 4 |
| 6 | What Kami Do: Liquidating | MSQ 5 |
| 7 | Making $MUSU | MSQ 4 |
| 8 | Supporting Local Businesses | MSQ 7 |
| 9 | Building a Reputation | MSQ 8 |
| 10 | KW and You: Having a Normal One | MSQ 9 |
| 11 | KW and You: That Eerie Feeling | MSQ 10 |
| 12 | KW and You: Insects in the Miasma | MSQ 11 |
| 13 | KW and You: Tossed in the Scrap Heap | MSQ 12 |
| 14–16 | Identifying Materials I–III | MSQ 13–15 |
| 17 | Exploring Other Options | MSQ 16 |
| 18–20 | Harvesting Data I–III | MSQ 17–19 |
| 21–27 | Squaring the Circle I–VII | MSQ 20 |
| 28–29 | Deeper Understanding / Computer Blues | MSQ 27–28 |
| 30 | Humility | MSQ 29 |
| 31 | Pyramid Power | MSQ 30, MIN 15 |
| 32–35 | Safe Hex / Holier / Taking Pains / Steel | MSQ 31 |
| 36–104 | Caves storyline (ongoing) | Various |

### Mina's Quests (MIN)

| Index | Title | Prerequisite |
|-------|-------|--------------|
| 2001 | Grand Opening | MSQ 7 |
| 2002 | Customer Loyalty Program | MIN 2001 |
| 2003 | Early Market Research I | MIN 2002 |
| 2004 | Early Market Research II | MIN 2003 |
| 2005 | Early Market Research III | MIN 2004 |
| 2006 | Community Outreach | MIN 2005 |
| 2007 | Restocking | MIN 2006 |
| 2008 | Offering an Apprenticeship | MIN 2003 |
| 2009 | Basics of Hex - Extracts | MIN 2008 |
| 2010 | Basics of Hex - Potions | MIN 2009 |
| 2011 | Hex Education | MIN 2007, MIN 2010 |
| 2012–2016 | Advanced Mina quests | Various |

### Side Quests (SQ)

| Index | Title | Prerequisite |
|-------|-------|--------------|
| 3001 | Rejecting Fate | MSQ 3 |
| 3002 | Health & Safety | MSQ 4 |
| 3003 | There Are Levels to This | MSQ 5 |
| 3004 | Skill Issue | SQ 3003 |
| 3005 | Spring Rites | Kami liquidated |
| 3006 | What's In a Name? | MSQ 8 |
| 3007 | Land Survey | MSQ 17 |
| 3008 | Peregrination | SQ 3007 |
| 3009–3022 | Various side content | Various |

> **Total quests:** ~100+ (main story, Mina's, side quests). Some quests have daily repeat variants. Full quest data in `packages/contracts/deployment/world/data/quests/quests.csv`.

---

## Affinities (Types)

Affinities affect harvest efficacy and liquidation matchups.

| Affinity | Description |
|----------|-------------|
| **Normal** | Pure, natural essence — no external influence |
| **Eerie** | Divine or supernatural influence |
| **Insect** | Corruption, defilement, decay |
| **Scrap** | Human-made remnants, material attachments |

Kami have body and hand affinities. Nodes can have one or two affinities (e.g., "Eerie, Scrap"). Matching affinities grants harvest bonuses.

---

## See Also

- [Entity Discovery](../player-api/entity-discovery.md) — How to derive and discover entity IDs
- [Harvesting](../player-api/harvesting.md) — Harvest mechanics and node interactions
- [Skills & Relationships](../player-api/skills-and-relationships.md) — Skill upgrade system
- [Quests](../player-api/quests.md) — Quest accept/complete mechanics
