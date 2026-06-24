import { IChainAdapter } from './IChainAdapter';

export interface IRoute {
  path: string[];
  expectedOutput: string;
  fee: string;
}

export interface IRouter {
  findBestRoute(fromChain: number, toChain: number, amount: string): Promise<IRoute>;
}
