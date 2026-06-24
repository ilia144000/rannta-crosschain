import { UserIntent, RoutePlan } from '@rannta-crosschain/warp';

export interface ExchangeIntegrationProxy {
  requestRoute(intent: UserIntent): Promise<RoutePlan>;
  submitTransaction(tx: any): Promise<string>;
  getReceiptStatus(receiptId: string): Promise<string>;
}
