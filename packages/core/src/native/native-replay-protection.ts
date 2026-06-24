export class NativeReplayProtection {
  private processedEvents: Set<string> = new Set();

  isNew(eventHash: string): boolean {
    return !this.processedEvents.has(eventHash);
  }
}
