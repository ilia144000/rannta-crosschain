import { NetworkKey } from '@rannta-crosschain/core';

export interface AssetPolicy {
  network: NetworkKey | string;
  role: 'NATIVE_LOCK' | 'MAPPED_REPRESENTATION' | 'SOURCE_REPRESENTATION' | 'TARGET_REPRESENTATION';
  identifier?: string;
  assetKey?: string;
}

export interface CanonicalRouteDefinition {
  routeId: string;
  source: AssetPolicy;
  target: AssetPolicy;
  isActive?: boolean;
  representationModel?: 'PREMINTED_TREASURY_RESERVE';
}

export interface BridgeConfiguration {
  configuredCapacity: string;
  treasuryReference: string | null;
  sourceAuthorityReference: string | null;
  destinationAuthorityReference: string | null;
}
