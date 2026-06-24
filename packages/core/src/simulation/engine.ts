import { MessageEnvelope } from '../messaging/envelope';
import { SimulationResult, FailureReason } from './models';

export class FailureSimulator {
  static simulateValidation(envelope: MessageEnvelope, injectedFailure?: FailureReason): SimulationResult {
    if (injectedFailure) {
      return { isValid: false, reason: injectedFailure };
    }
    
    // Basic structural integrity check
    if (envelope.sourceChain === envelope.targetChain) {
      return { isValid: false, reason: 'INVALID_SOURCE_CHAIN' };
    }

    return { isValid: true, reason: null };
  }
}
