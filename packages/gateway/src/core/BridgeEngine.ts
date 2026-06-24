import { IChainAdapter } from './interfaces/IChainAdapter';
import { IRouter } from './interfaces/IRouter';

export class BridgeEngine {
  private adapters: Map<number, IChainAdapter> = new Map();
  private router: IRouter;

  constructor(router: IRouter) {
    this.router = router;
  }

  public registerAdapter(adapter: IChainAdapter) {
    this.adapters.set(adapter.chainId, adapter);
  }

  public async executeBridge(fromChain: number, toChain: number, amount: string) {
    const route = await this.router.findBestRoute(fromChain, toChain, amount);
    return route;
  }
}
