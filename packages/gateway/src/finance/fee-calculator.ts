export class FeeCalculator {
  // Markup percentages based on the network tier
  private static readonly RATES: Record<string, number> = {
    'L2': 0.0005, // 0.05%
    'L1': 0.0010, // 0.10%
    'ALT': 0.0007, // 0.07%
    'CROSS': 0.0015 // 0.15%
  };

  static calculateFee(amount: string, networkType: 'L1' | 'L2' | 'ALT' | 'CROSS'): string {
    const value = parseFloat(amount);
    const rate = this.RATES[networkType] || 0.002;
    return (value * rate).toFixed(6);
  }
}
