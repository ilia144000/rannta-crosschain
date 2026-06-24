export const NETWORK_KEYS = [
  'RANNTA_XCHAIN',
  'BITCOIN',
  'ETHEREUM',
  'SOLANA',
  'TON',
  'BASE',
  'BNB_SMART_CHAIN',
  'ARBITRUM',
  'FANTOM',
  'OPTIMISM',
  'AVALANCHE',
  'POLYGON',
  'TRON',
  'APTOS'
] as const;

export type NetworkKey = typeof NETWORK_KEYS[number];
export type Network = NetworkKey;

export type ChainFamily =
  | 'RANNTA_NATIVE'
  | 'EVM'
  | 'TON'
  | 'UTXO'
  | 'SVM'
  | 'TVM'
  | 'MOVE';

export type NetworkLifecycle =
  | 'IMPLEMENTED_LOCAL'
  | 'CONFIGURED'
  | 'ACTIVE'
  | 'LIVE'
  | 'PAUSED'
  | 'DEGRADED'
  | 'RECOVERY_REQUIRED'
  | 'DISABLED'
  | 'RETIRED';

export interface NetworkDescriptor {
  key: NetworkKey;
  displayName: string;
  family: ChainFamily;
  chainId: number | null;
  nativeAssetSymbol: string;
  nativeAssetDecimals: number;
  lifecycle: NetworkLifecycle;
}

export const NETWORKS: readonly NetworkDescriptor[] = [
  { key: 'RANNTA_XCHAIN', displayName: 'RANNTA X-Chain', family: 'RANNTA_NATIVE', chainId: 13113, nativeAssetSymbol: 'RNTX', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'BITCOIN', displayName: 'Bitcoin', family: 'UTXO', chainId: null, nativeAssetSymbol: 'BTC', nativeAssetDecimals: 8, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'ETHEREUM', displayName: 'Ethereum', family: 'EVM', chainId: 1, nativeAssetSymbol: 'ETH', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'SOLANA', displayName: 'Solana', family: 'SVM', chainId: null, nativeAssetSymbol: 'SOL', nativeAssetDecimals: 9, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'TON', displayName: 'TON', family: 'TON', chainId: null, nativeAssetSymbol: 'TON', nativeAssetDecimals: 9, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'BASE', displayName: 'Base', family: 'EVM', chainId: 8453, nativeAssetSymbol: 'ETH', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'BNB_SMART_CHAIN', displayName: 'BNB Smart Chain', family: 'EVM', chainId: 56, nativeAssetSymbol: 'BNB', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'ARBITRUM', displayName: 'Arbitrum', family: 'EVM', chainId: 42161, nativeAssetSymbol: 'ETH', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'FANTOM', displayName: 'Fantom', family: 'EVM', chainId: 250, nativeAssetSymbol: 'FTM', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'OPTIMISM', displayName: 'Optimism', family: 'EVM', chainId: 10, nativeAssetSymbol: 'ETH', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'AVALANCHE', displayName: 'Avalanche', family: 'EVM', chainId: 43114, nativeAssetSymbol: 'AVAX', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'POLYGON', displayName: 'Polygon', family: 'EVM', chainId: 137, nativeAssetSymbol: 'POL', nativeAssetDecimals: 18, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'TRON', displayName: 'TRON', family: 'TVM', chainId: null, nativeAssetSymbol: 'TRX', nativeAssetDecimals: 6, lifecycle: 'IMPLEMENTED_LOCAL' },
  { key: 'APTOS', displayName: 'Aptos', family: 'MOVE', chainId: null, nativeAssetSymbol: 'APT', nativeAssetDecimals: 8, lifecycle: 'IMPLEMENTED_LOCAL' }
];

export function getNetworkDescriptor(network: NetworkKey): NetworkDescriptor {
  const descriptor = NETWORKS.find((item) => item.key === network);
  if (!descriptor) {
    throw new Error(`Unknown network: ${network}`);
  }
  return descriptor;
}
