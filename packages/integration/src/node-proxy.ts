import { MessageEnvelope, ProofSchema } from '@rannta-crosschain/core';

export interface NativeEvidenceRequest {
  routeId: string;
  sourceReference: string;
}

export interface NativeEvidenceResult {
  accepted: boolean;
  proof: ProofSchema | null;
}

export interface NodeIntegrationProxy {
  verifyNativeEvidence(request: NativeEvidenceRequest): Promise<NativeEvidenceResult>;
  reportSettlement(envelope: MessageEnvelope): Promise<void>;
}
