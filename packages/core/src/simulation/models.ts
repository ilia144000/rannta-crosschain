import { MessageEnvelope } from '../messaging/envelope';

export type FailureReason = 
  | 'DUPLICATE_RECEIPT' 
  | 'INVALID_SOURCE_CHAIN' 
  | 'AMOUNT_MISMATCH' 
  | 'EMERGENCY_SUSPENDED' 
  | 'UNSUPPORTED_ASSET';

export interface SimulationResult {
  isValid: boolean;
  reason: FailureReason | null;
}

export interface SecurityValidator {
  validate(envelope: MessageEnvelope): SimulationResult;
}
