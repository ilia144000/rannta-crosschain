export type LockReleaseState =
  | 'INITIATED'
  | 'SOURCE_LOCKED'
  | 'PROOF_GENERATED'
  | 'TARGET_RELEASED'
  | 'VERIFIED_COMPLETE';

export type ReturnRedemptionState =
  | 'INITIATED'
  | 'TARGET_BURNED'
  | 'PROOF_GENERATED'
  | 'SOURCE_UNLOCKED'
  | 'VERIFIED_COMPLETE';

export interface BridgeStateMachine {
  transactionId: string;
  direction: 'OUTBOUND_LOCK' | 'INBOUND_RETURN';
  currentState: LockReleaseState | ReturnRedemptionState;
  updatedAt: number;
}
