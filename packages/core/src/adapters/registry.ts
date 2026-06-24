import { ChainFamily } from '../networks';
import { ChainAdapter } from './types';
import { LocalAdapterContract } from './stubs';

export const adapterRegistry: Record<ChainFamily, ChainAdapter> = {
  RANNTA_NATIVE: new LocalAdapterContract('RANNTA_NATIVE', 'RANNTA_XCHAIN'),
  EVM: new LocalAdapterContract('EVM', 'ETHEREUM'),
  TON: new LocalAdapterContract('TON', 'TON'),
  UTXO: new LocalAdapterContract('UTXO', 'BITCOIN'),
  SVM: new LocalAdapterContract('SVM', 'SOLANA'),
  TVM: new LocalAdapterContract('TVM', 'TRON'),
  MOVE: new LocalAdapterContract('MOVE', 'APTOS')
};
