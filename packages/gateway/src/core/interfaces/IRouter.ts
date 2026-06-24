export interface RouteSearchRequest {
  sourceNetwork: string;
  destinationNetwork: string;
  amountBaseUnits: string;
  sourceAsset: string;
  destinationAsset: string;
}

export interface RouteSearchResult {
  routeId: string;
  providerReferences: readonly string[];
  expectedOutputBaseUnits: string | null;
  feeBaseUnits: string | null;
}

export interface IRouter {
  findBestRoute(request: RouteSearchRequest): Promise<RouteSearchResult>;
}
