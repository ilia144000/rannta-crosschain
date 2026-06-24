export interface BridgeReserveSnapshot {
  configuredCapacity: string;
  sourceBacked: string;
  targetReleased: string;
  targetReturned: string;
  sourceRedeemed: string;
}

export class BridgeReserveLedger {
  private snapshot: BridgeReserveSnapshot = {
    configuredCapacity: '13000000',
    sourceBacked: '0',
    targetReleased: '0',
    targetReturned: '0',
    sourceRedeemed: '0'
  };

  getSnapshot(): Readonly<BridgeReserveSnapshot> {
    return { ...this.snapshot };
  }

  isConsistent(): boolean {
    return BigInt(this.snapshot.targetReleased) <= BigInt(this.snapshot.sourceBacked)
      && BigInt(this.snapshot.targetReleased) <= BigInt(this.snapshot.configuredCapacity)
      && BigInt(this.snapshot.sourceRedeemed) <= BigInt(this.snapshot.targetReturned);
  }
}
