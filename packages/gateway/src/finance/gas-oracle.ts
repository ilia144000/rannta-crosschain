export class GasOracle {
  // Public RPC endpoints (Free, No API Key needed)
  private static readonly RPC_ENDPOINTS: Record<string, string> = {
    'ETHEREUM': 'https://eth.llamarpc.com',
    'BSC': 'https://bsc-dataseed.binance.org',
    'POLYGON': 'https://polygon-rpc.com',
    'ARBITRUM': 'https://arb1.arbitrum.io/rpc'
  };

  static async getGasEstimate(network: string): Promise<{ gasPrice: string, estimatedFee: string }> {
    const rpcUrl = this.RPC_ENDPOINTS[network.toUpperCase()];
    
    if (!rpcUrl) return { gasPrice: '0.001', estimatedFee: '0.001' };

    try {
      const response = await fetch(rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_gasPrice',
          params: [],
          id: 1
        })
      });
      
      const data = await response.json();
      // Convert Wei (hex) to ETH (decimal)
      const gasPriceWei = parseInt(data.result, 16);
      const gasPriceEth = (gasPriceWei / 1e18 * 21000).toFixed(6); // 21000 is standard gas limit
      
      return { gasPrice: gasPriceEth, estimatedFee: gasPriceEth };
    } catch (error) {
      // Fallback to static if network is slow
      return { gasPrice: '0.001', estimatedFee: '0.001' };
    }
  }
}
