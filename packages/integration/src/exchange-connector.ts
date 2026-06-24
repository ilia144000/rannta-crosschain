import { CrossChainGateway } from '../../gateway/src/service/gateway';

export interface ExchangeIntegrationLayer {
  gateway: CrossChainGateway;
  submitRouteIntent(intent: any): Promise<any>;
  getBridgeStatus(): Promise<any>;
}
