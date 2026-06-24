import { ChainAdapter, AddressFormat } from './types';
import { ChainFamily, Network } from '../networks';
import { RouteCapability } from '../capabilities';

export class LocalAdapterContract implements ChainAdapter {
  constructor(public family: ChainFamily, public network: Network) {}

  getCapability(): RouteCapability {
    return 'IMPLEMENTED_LOCAL';
  }

  validateAddress(address: string): AddressFormat {
    return { value: address, isValidated: false };
  }

  buildTransaction(_intent: unknown): Promise<never> {
    return Promise.reject(new Error('Adapter execution is not implemented in the local contract layer.'));
  }
}
