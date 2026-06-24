import { AssetIdentity, NetworkKey } from '@rannta-crosschain/core';

export interface ProviderQuoteRequest {
  sourceNetwork: NetworkKey;
  destinationNetwork: NetworkKey;
  sourceAsset: AssetIdentity;
  destinationAsset: AssetIdentity;
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
  providerType: 'BRIDGE' | 'DEX' | 'AGGREGATOR';
  getQuote(request: ProviderQuoteRequest): Promise<ProviderQuote>;
}
