export interface BridgeRequest {
  sourceEventHash: string;
  amount: string;
  recipient: string;
  timestamp: number;
}

export interface BridgeReceipt {
  receiptId: string;
  sourceHash: string;
  status: 'PENDING' | 'FINALIZED' | 'REJECTED';
}
