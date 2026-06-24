import { NetworkKey } from '@rannta-crosschain/core';

export interface AssetPolicy {
  network: NetworkKey;
  role: 'SOURCE_REPRESENTATION' | 'TARGET_REPRESENTATION';
  assetKey: string;
}

export interface CanonicalRouteDefinition {
  routeId: string;
  source: AssetPolicy;
  target: AssetPolicy;
  representationModel: 'PREMINTED_TREASURY_RESERVE';
}

export interface BridgeConfiguration {
  configuredCapacity: string;
  treasuryReference: string | null;
  sourceAuthorityReference: string | null;
  destinationAuthorityReference: string | null;
}
