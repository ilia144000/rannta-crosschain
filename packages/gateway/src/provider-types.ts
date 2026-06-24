import { Network, AssetIdentity } from '@rannta-crosschain/core';
import { QuoteNormalization } from '@rannta-crosschain/warp';

export interface ProviderQuoteRequest {
  sourceNetwork: Network;
  targetNetwork: Network;
  sourceAsset: AssetIdentity;
  targetAsset: AssetIdentity;
  amount: string;
}

export interface ExternalProvider {
  providerId: string;
  providerType: 'LIQUIDITY' | 'BRIDGE' | 'AGGREGATOR';
  isAvailable(): boolean;
  fetchQuote(request: ProviderQuoteRequest): Promise<QuoteNormalization>;
}
