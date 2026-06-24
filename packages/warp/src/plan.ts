import { createRouteId, NetworkKey } from '@rannta-crosschain/core';

export interface PlanInput {
  sourceNetwork: NetworkKey;
  destinationNetwork: NetworkKey;
  sourceAssetKey: string;
  destinationAssetKey: string;
  amountBaseUnits: string;
  recipient: string;
}

export interface PlanStep {
  index: number;
  kind: 'SWAP' | 'BRIDGE';
  sourceNetwork: NetworkKey;
  destinationNetwork: NetworkKey;
}

export interface PlannedRoute {
  routeId: string;
  input: PlanInput;
  steps: readonly PlanStep[];
  providerReferences: readonly string[];
}

export function createPlannedRoute(input: PlanInput, steps: readonly PlanStep[]): PlannedRoute {
  return {
    routeId: createRouteId(input.sourceNetwork, input.destinationNetwork),
    input,
    steps,
    providerReferences: []
  };
}
