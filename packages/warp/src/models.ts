import { Network, AssetIdentity } from '@rannta-crosschain/core';

export interface UserIntent {
  sourceNetwork: Network;
  targetNetwork: Network;
  sourceAsset: AssetIdentity;
  targetAsset: AssetIdentity;
  amountIn: string;
}

export interface RouteStep {
  stepIndex: number;
  action: 'SWAP' | 'BRIDGE';
  sourceNetwork: Network;
  targetNetwork: Network;
  providerId: string;
}

export interface RoutePlan {
  planId: string;
  intent: UserIntent;
  steps: RouteStep[];
  isExecutable: boolean;
}
