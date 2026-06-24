export interface IChainAdapter {
  chainId: number;
  provider: any;
  getBalance(address: string, token: string): Promise<string>;
  getQuote(fromToken: string, toToken: string, amount: string): Promise<any>;
  sendTransaction(txData: any): Promise<string>;
}
