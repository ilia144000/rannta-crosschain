import { AssetIdentity, NetworkKey } from '@rannta-crosschain/core';

export interface UserIntent {
  sourceNetwork: NetworkKey;
  targetNetwork: NetworkKey;
  sourceAsset: AssetIdentity;
  targetAsset: AssetIdentity;
  amountBaseUnits: string;
  recipient: string;
}

export interface RouteStep {
  stepIndex: number;
  action: 'SWAP' | 'BRIDGE';
  sourceNetwork: NetworkKey;
  targetNetwork: NetworkKey;
  providerReference: string | null;
}

export interface RoutePlan {
  planId: string;
  intent: UserIntent;
  steps: readonly RouteStep[];
  providerReferences: readonly string[];
}
