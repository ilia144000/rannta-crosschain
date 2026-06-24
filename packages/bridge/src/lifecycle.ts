import { ReplayKeySchema } from '@rannta-crosschain/core';

export type RecoveryState =
  | 'NOT_REQUIRED'
  | 'PENDING_OPERATOR_REVIEW'
  | 'REFUND_APPROVED'
  | 'REFUND_EXECUTED'
  | 'MANUAL_SETTLEMENT_REQUIRED';

export interface ReplayProtectionModel {
  key: ReplayKeySchema;
  isConsumed: boolean;
  consumedAtBlock?: number;
}

export interface BridgeReceiptLifecycle {
  receiptId: string;
  replayProtection: ReplayProtectionModel;
  recoveryState: RecoveryState;
  auditTrail: string[];
}
