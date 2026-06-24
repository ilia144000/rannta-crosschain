import { RouteState } from './state-machine';

export class RuntimeRegistry {
  private routes: Map<string, RouteState> = new Map();

  registerRoute(routeId: string) {
    this.routes.set(routeId, { routeId, status: 'PENDING', lastUpdated: Date.now() });
  }
}
