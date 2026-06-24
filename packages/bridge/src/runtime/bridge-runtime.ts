import { BridgeEmergencyState } from './emergency';
import { BridgeRequest } from './models';

export class CanonicalBridgeRuntime {
  public readonly emergency = new BridgeEmergencyState();

  normalizeRequest(request: BridgeRequest): BridgeRequest {
    return { ...request };
  }
}
