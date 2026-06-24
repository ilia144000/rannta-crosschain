import { FeeCalculator } from './fee-calculator';
import { GasOracle } from './gas-oracle';

export interface Quote {
  network: string;
  gasFee: string;
  serviceFee: string;
  totalCost: string;
}

export class PricingEngine {
  static async getQuote(amount: string, network: string, tier: 'L1' | 'L2' | 'ALT' | 'CROSS'): Promise<Quote> {
    // 1. Fetch current network gas cost
    const gas = await GasOracle.getGasEstimate(network);
    
    // 2. Calculate our competitive service fee
    const markup = FeeCalculator.calculateFee(amount, tier);
    
    // 3. Aggregate total
    const total = parseFloat(gas.estimatedFee) + parseFloat(markup);
    
    return {
      network,
      gasFee: gas.estimatedFee,
      serviceFee: markup,
      totalCost: total.toFixed(6)
    };
  }
}
