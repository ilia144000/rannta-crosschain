import { IRouter, RouteSearchRequest, RouteSearchResult } from './interfaces/IRouter';

export class BridgeEngine {
  constructor(private readonly router: IRouter) {}

  planRoute(request: RouteSearchRequest): Promise<RouteSearchResult> {
    return this.router.findBestRoute(request);
  }
}
