import { NetworkKey } from '@rannta-crosschain/core';

export interface WarpIntent {
  sourceNetwork: NetworkKey;
  destinationNetwork: NetworkKey;
  sourceAsset: string;
  targetAsset: string;
  amountBaseUnits: string;
  recipient: string;
}

export type RoutePlanState = 'PLANNED' | 'CONFIGURED' | 'READY';

export interface RoutePlan {
  routeId: string;
  steps: readonly string[];
  providerReferences: readonly string[];
  state: RoutePlanState;
}
