import { createRouteId } from '@rannta-crosschain/core';
import { RoutePlan, WarpIntent } from './models';

export class RouteGraphEngine {
  static planRoute(intent: WarpIntent): RoutePlan {
    return {
      routeId: createRouteId(intent.sourceNetwork, intent.destinationNetwork),
      steps: ['SOURCE', 'ROUTE_DISCOVERY', 'DESTINATION'],
      providerReferences: [],
      state: 'PLANNED'
    };
  }
}
