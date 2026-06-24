export const NETWORKS = [
  'RANNTA X-Chain', 'Bitcoin', 'Ethereum', 'Solana', 'TON', 'Base',
  'BNB Smart Chain', 'Arbitrum', 'Fantom', 'Optimism', 'Avalanche',
  'Polygon', 'TRON', 'Aptos'
] as const;

export type Network = typeof NETWORKS[number];

export type ChainFamily =
  | 'RANNTA_NATIVE'
  | 'EVM'
  | 'TON'
  | 'UTXO'
  | 'SVM'
  | 'TVM'
  | 'MOVE';
