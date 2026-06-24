import { ExternalProvider } from './provider-types';
import { OfflineProviderStub } from './stubs';

export const providerRegistry: Record<string, ExternalProvider> = {
  'mock-liquidity-a': new OfflineProviderStub('mock-liquidity-a', 'LIQUIDITY'),
  'mock-aggregator-b': new OfflineProviderStub('mock-aggregator-b', 'AGGREGATOR')
};
