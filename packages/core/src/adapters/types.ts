import { ChainFamily, Network } from '../networks';
import { RouteCapability } from '../capabilities';
import { ProofSchema } from '../schemas';

export interface AddressFormat {
  value: string;
  isValidated: boolean;
}

export interface TransactionReference {
  hash: string;
  blockNumber?: number;
  timestamp?: number;
}

export interface ProofInput {
  txRef: TransactionReference;
  proofData: ProofSchema;
}

export interface ChainAdapter {
  family: ChainFamily;
  network: Network;
  getCapability(): RouteCapability;
  validateAddress(address: string): AddressFormat;
  buildTransaction(intent: unknown): Promise<never>;
}
