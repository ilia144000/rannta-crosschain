export interface WarpIntent {
  sourceAsset: string;
  targetAsset: string;
  amount: string;
}

export interface RoutePlan {
  steps: string[];
  providerId: string;
  isExecutable: boolean;
}
