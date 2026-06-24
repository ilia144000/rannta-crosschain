import { CanonicalBridgeRuntime } from '../../../bridge/src/runtime/bridge-runtime';
import { RouteGraphEngine } from '../../../warp/src/runtime/graph-engine';

export class CrossChainGateway {
  public bridge = new CanonicalBridgeRuntime();
  
  executeRoute(intent: any) {
    if (!this.bridge.emergency.checkOperational()) {
      throw new Error('GATEWAY_HALTED_BY_OWNER');
    }
    return RouteGraphEngine.planRoute(intent);
  }
}
