import { AssetIdentity } from '@rannta-crosschain/core';

export type CanonicalBridgeDirection =
  | 'RNTX_XCHAIN_TO_WRNTX_TON'
  | 'WRNTX_TON_TO_RNTX_XCHAIN';

export interface CanonicalBridgeModel {
  routeId: string;
  direction: CanonicalBridgeDirection;
  sourceAsset: AssetIdentity;
  targetAsset: AssetIdentity;
  representationModel: 'PREMINTED_TREASURY_RESERVE';
  configuredCapacityBaseUnits: string;
}
