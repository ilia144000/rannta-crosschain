import { AssetIdentity } from './schemas';

export const RNTX_ASSET: AssetIdentity = {
  assetKey: 'RNTX_NATIVE',
  network: 'RANNTA_XCHAIN',
  symbol: 'RNTX',
  decimals: 18,
  kind: 'NATIVE',
  canonicalAssetKey: 'RNTX',
  representationReference: null
};

export const WRNTX_ASSET: AssetIdentity = {
  assetKey: 'WRNTX_TON',
  network: 'TON',
  symbol: 'wRNTX',
  decimals: 18,
  kind: 'WRAPPED_REPRESENTATION',
  canonicalAssetKey: 'RNTX',
  representationReference: null
};

export const CANONICAL_ASSETS: readonly AssetIdentity[] = [RNTX_ASSET, WRNTX_ASSET];
