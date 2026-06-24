export type RouteFailureReason =
  | 'INSUFFICIENT_LIQUIDITY'
  | 'PROVIDER_UNAVAILABLE'
  | 'NO_PATH_FOUND'
  | 'FEE_EXCEEDS_TOLERANCE'
  | 'SLIPPAGE_EXCEEDS_TOLERANCE'
  | 'UNSUPPORTED_ASSET'
  | 'ADAPTER_NOT_PROVISIONED';

export interface RouteFailureTaxonomy {
  code: RouteFailureReason;
  description: string;
  isRecoverable: boolean;
}
