export interface ProductionConfig {
  env: 'PRODUCTION' | 'STAGING';
  bridgeCapacity: string;
  operationalThreshold: string;
  networkFamily: string[];
}

export const prodConfig: ProductionConfig = {
  env: 'PRODUCTION',
  bridgeCapacity: '13000000',
  operationalThreshold: '1000000',
  networkFamily: ['EVM', 'TON', 'BTC']
};
