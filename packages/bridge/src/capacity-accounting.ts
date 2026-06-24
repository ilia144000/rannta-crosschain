export interface CapacitySnapshot {
  configuredCapacity: bigint;
  sourceBackedAmount: bigint;
  targetReleasedAmount: bigint;
  targetReturnedAmount: bigint;
  sourceRedeemedAmount: bigint;
}

export class CapacityAccounting {
  private state: CapacitySnapshot;

  constructor(configuredCapacity: bigint) {
    this.state = {
      configuredCapacity,
      sourceBackedAmount: 0n,
      targetReleasedAmount: 0n,
      targetReturnedAmount: 0n,
      sourceRedeemedAmount: 0n
    };
  }

  getSnapshot(): Readonly<CapacitySnapshot> {
    return { ...this.state };
  }
}
