import { RouteGraphEngine } from '../../../warp/src/runtime/graph-engine';
import { RoutePlan, WarpIntent } from '../../../warp/src/runtime/models';

export class CrossChainGateway {
  planWarpRoute(intent: WarpIntent): RoutePlan {
    return RouteGraphEngine.planRoute(intent);
  }
}
