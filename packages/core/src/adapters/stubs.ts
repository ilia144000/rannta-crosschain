import { ChainAdapter, AddressFormat } from './types';
import { ChainFamily, Network } from '../networks';
import { RouteCapability } from '../capabilities';

export class DisabledAdapterStub implements ChainAdapter {
  constructor(public family: ChainFamily, public network: Network) {}

  getCapability(): RouteCapability {
    return 'NOT_PROVISIONED';
  }

  validateAddress(address: string): AddressFormat {
    throw new Error('DISABLED: Adapter not provisioned.');
  }

  buildTransaction(intent: unknown): Promise<never> {
    throw new Error('DISABLED: Adapter not provisioned.');
  }
}
