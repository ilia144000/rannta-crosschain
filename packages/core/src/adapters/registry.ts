import { ChainFamily } from '../networks';
import { ChainAdapter } from './types';
import { DisabledAdapterStub } from './stubs';

export const adapterRegistry: Record<ChainFamily, ChainAdapter> = {
  'RANNTA_NATIVE': new DisabledAdapterStub('RANNTA_NATIVE', 'RANNTA X-Chain'),
  'EVM': new DisabledAdapterStub('EVM', 'Ethereum'),
  'TON': new DisabledAdapterStub('TON', 'TON'),
  'UTXO': new DisabledAdapterStub('UTXO', 'Bitcoin'),
  'SVM': new DisabledAdapterStub('SVM', 'Solana'),
  'TVM': new DisabledAdapterStub('TVM', 'TRON'),
  'MOVE': new DisabledAdapterStub('MOVE', 'Aptos')
};
