export * from './policy';
export * from './state-machine';
export * from './invariants';
export * from './lifecycle';

import { CanonicalRouteDefinition } from './policy';

export const CANONICAL_RNTX_TON_ROUTE: CanonicalRouteDefinition = {
  routeId: 'RANNTA_X_CHAIN_TO_TON',
  source: {
    network: 'RANNTA X-Chain',
    role: 'NATIVE_LOCK',
    identifier: 'RNTX_NATIVE'
  },
  target: {
    network: 'TON',
    role: 'MAPPED_REPRESENTATION',
    identifier: 'wRNTX_JETTON'
  },
  isActive: false
};
