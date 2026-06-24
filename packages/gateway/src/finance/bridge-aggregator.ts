export interface ProviderQuoteRequest {
  sourceNetwork: string;
  destinationNetwork: string;
  sourceAsset: string;
  destinationAsset: string;
  amountBaseUnits: string;
}

export interface ProviderQuote {
  providerId: string;
  outputAmountBaseUnits: string;
  feeAmountBaseUnits: string;
  expiresAt: number;
}

export interface RouteProvider {
  providerId: string;
  getQuote(request: ProviderQuoteRequest): Promise<ProviderQuote>;
}
