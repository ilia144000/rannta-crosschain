export class BridgeReserveLedger {
  private lockedRntx: string = '0';
  private mintedWrntx: string = '0';
  private capacityCeiling: string = '13000000'; // 13M wRNTX

  getInvariants(): boolean {
    return BigInt(this.mintedWrntx) <= BigInt(this.lockedRntx) &&
           BigInt(this.mintedWrntx) <= BigInt(this.capacityCeiling);
  }

  updateLedger(locked: string, minted: string) {
    this.lockedRntx = locked;
    this.mintedWrntx = minted;
  }
}
