export interface Receipt {
  id: string;
  sourceEventHash: string;
  timestamp: number;
}

export class ReceiptLifecycleEngine {
  static generateId(eventHash: string): string {
    return 'REC-' + eventHash.substring(0, 8).toUpperCase();
  }
}
