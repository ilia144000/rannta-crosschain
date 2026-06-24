import { MessageEnvelope } from '@rannta-crosschain/core';

export interface NodeIntegrationProxy {
  verifyNativeLock(txHash: string): Promise<boolean>;
  reportSettlement(envelope: MessageEnvelope): Promise<void>;
}
