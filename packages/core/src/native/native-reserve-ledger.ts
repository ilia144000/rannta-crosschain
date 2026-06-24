export class NativeReserveLedger {
  private totalLocked: string = '0';
  
  validateRelease(amount: string): boolean {
    return BigInt(this.totalLocked) >= BigInt(amount);
  }
}
