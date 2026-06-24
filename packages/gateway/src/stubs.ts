import { ExternalProvider, ProviderQuoteRequest } from './provider-types';
import { QuoteNormalization } from '@rannta-crosschain/warp';

export class OfflineProviderStub implements ExternalProvider {
  constructor(
    public providerId: string,
    public providerType: 'LIQUIDITY' | 'BRIDGE' | 'AGGREGATOR'
  ) {}

  isAvailable(): boolean {
    return false;
  }

  async fetchQuote(request: ProviderQuoteRequest): Promise<QuoteNormalization> {
    throw new Error(OFFLINE_STUB: Provider  + this.providerId +  is completely disabled and network isolation is active.);
  }
}
