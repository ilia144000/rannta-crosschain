export interface PriceRecord {
  sourceId: string;
  assetPair: string;
  valueBaseUnits: string;
  observedAt: number;
}

export class PriceCache {
  private readonly records = new Map<string, PriceRecord>();

  save(record: PriceRecord): void {
    this.records.set(record.assetPair, record);
  }

  get(assetPair: string): PriceRecord | null {
    return this.records.get(assetPair) ?? null;
  }

  clear(): void {
    this.records.clear();
  }
}
