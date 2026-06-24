import { UserIntent, RoutePlan } from '@rannta-crosschain/warp';

export interface ExchangeIntegrationProxy {
  requestRoute(intent: UserIntent): Promise<RoutePlan>;
  getReceiptStatus(receiptId: string): Promise<string>;
}
