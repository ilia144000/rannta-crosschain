export interface GasEstimate {
  network: string;
  gasPriceBaseUnits: string;
  transactionFeeBaseUnits: string;
  observedAt: number;
}

export interface GasEstimateSource {
  sourceId: string;
  getEstimate(network: string): Promise<GasEstimate>;
}
