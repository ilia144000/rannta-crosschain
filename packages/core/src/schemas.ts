import { NetworkKey } from './networks';

export type AssetKind = 'NATIVE' | 'TOKEN' | 'WRAPPED_REPRESENTATION';

export interface AssetIdentity {
  assetKey: string;
  network: NetworkKey;
  symbol: string;
  decimals: number;
  kind: AssetKind;
  canonicalAssetKey: string;
  representationReference: string | null;
}

export interface RepresentationModel {
  canonicalAssetKey: string;
  sourceAsset: AssetIdentity;
  targetAsset: AssetIdentity;
  model: 'PREMINTED_TREASURY_RESERVE' | 'MINT_BURN_REPRESENTATION';
}

export interface ReplayKeySchema {
  routeId: string;
  sourceNetwork: NetworkKey;
  sourceReference: string;
  eventIndex: string;
}

export interface ProofSchema {
  sourceNetwork: NetworkKey;
  sourceReference: string;
  evidenceReference: string;
  finalityReference: string;
}

export type ReceiptStatus =
  | 'CREATED'
  | 'SOURCE_OBSERVED'
  | 'SOURCE_FINALIZED'
  | 'DESTINATION_SUBMITTED'
  | 'DESTINATION_CONFIRMED'
  | 'SETTLED'
  | 'FAILED'
  | 'RECOVERY_REQUIRED';

export interface ReceiptSchema {
  receiptId: string;
  routeId: string;
  sourceNetwork: NetworkKey;
  destinationNetwork: NetworkKey;
  amountBaseUnits: string;
  replayKey: ReplayKeySchema;
  status: ReceiptStatus;
}

export interface MessageEnvelope {
  messageId: string;
  routeId: string;
  receiptId: string;
  payloadReference: string;
  createdAt: number;
}
