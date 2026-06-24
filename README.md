# RANNTA Cross-Chain Core

RANNTA Cross-Chain Core is the local foundation for RANNTA Bridge, RANNTA Warp, the Cross-Chain Gateway, and future Exchange and X-Chain Node integrations.

## Product boundaries

- **Bridge** preserves a canonical asset representation across networks.
- **Warp** plans intent-driven routes that may combine swap and bridge steps.
- **Gateway** coordinates route, receipt, capability, health, and owner-control interfaces.
- **RANNTA X-Chain Node** remains the authority for native RNTX lock, unlock, ledger, finality, and replay evidence.

## Network scope

The registry contains fourteen target networks:

- RANNTA X-Chain
- Bitcoin
- Ethereum
- Solana
- TON
- Base
- BNB Smart Chain
- Arbitrum
- Fantom
- Optimism
- Avalanche
- Polygon
- TRON
- Aptos

The canonical bridge model is:

`RNTX on RANNTA X-Chain <-> wRNTX on TON`

The configured 13,000,000 wRNTX value is a local capacity policy. It is not an on-chain balance, deployed supply, treasury balance, or transaction record.

## Local commands

```text
npm install
npm run typecheck
npm test
```

## Repository policy

Development commits are applied directly to `master`. This repository contains no production credentials, wallet keys, seed phrases, deployment addresses, or server configuration values.
