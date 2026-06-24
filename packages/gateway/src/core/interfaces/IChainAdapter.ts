export interface ChainObservationRequest {
  networkKey: string;
  reference: string;
}

export interface ChainObservationResult {
  reference: string;
  observed: boolean;
  finalized: boolean;
  evidenceReference: string | null;
}

export interface ChainExecutionRequest {
  routeId: string;
  payloadReference: string;
}

export interface ChainExecutionResult {
  requestId: string;
  transactionReference: string | null;
  acceptedAt: number;
}

export interface IChainAdapter {
  networkKey: string;
  observe(request: ChainObservationRequest): Promise<ChainObservationResult>;
  prepare(request: ChainExecutionRequest): Promise<ChainExecutionRequest>;
  submit(request: ChainExecutionRequest): Promise<ChainExecutionResult>;
}
