export interface ProviderNeutralFee {
  assetId: string;
  amount: string;
  feeType: 'NETWORK' | 'PROVIDER' | 'PROTOCOL';
}

export interface QuoteNormalization {
  providerId: string;
  estimatedAmountOut: string;
  minimumAmountOut: string;
  fees: ProviderNeutralFee[];
  estimatedDurationSeconds: number;
}
