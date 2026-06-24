export interface AssetIdentity {
  chainId: string;
  contractAddress: string;
  decimals: number;
}

export interface RepresentationModel {
  source: AssetIdentity;
  target: AssetIdentity;
  isNative: boolean;
}

export interface ReplayKeySchema {
  nonce: string;
  sourceTxHash: string;
}

export interface ProofSchema {
  payload: string;
  signature: string;
}

export interface ReceiptSchema {
  routeId: string;
  amount: string;
  replayKey: ReplayKeySchema;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}
