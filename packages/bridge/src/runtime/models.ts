import { NetworkKey, ReplayKeySchema, ReceiptStatus } from '@rannta-crosschain/core';

export type BridgeDirection =
  | 'RNTX_XCHAIN_TO_WRNTX_TON'
  | 'WRNTX_TON_TO_RNTX_XCHAIN';

export interface BridgeRequest {
  requestId: string;
  routeId: string;
  direction: BridgeDirection;
  sourceNetwork: NetworkKey;
  destinationNetwork: NetworkKey;
  sourceReference: string;
  amountBaseUnits: string;
  recipient: string;
  createdAt: number;
}

export interface BridgeReceipt {
  receiptId: string;
  requestId: string;
  routeId: string;
  direction: BridgeDirection;
  replayKey: ReplayKeySchema;
  status: ReceiptStatus;
  createdAt: number;
  updatedAt: number;
}
