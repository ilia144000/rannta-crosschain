import { Network } from '@rannta-crosschain/core';

export interface AssetPolicy {
  network: Network;
  role: 'NATIVE_LOCK' | 'MAPPED_REPRESENTATION';
  identifier: string;
}

export interface CanonicalRouteDefinition {
  routeId: string;
  source: AssetPolicy;
  target: AssetPolicy;
  isActive: boolean;
}

export interface EmergencySuspensionModel {
  isSuspended: boolean;
  reason: string | null;
  suspendedAt: number | null;
  operatorId: string | null;
}

export interface OperatorApprovalModel {
  requiredSignatures: number;
  approvedOperators: string[];
}
