export class CapabilityRegistry {
  private readonly configured = new Set<string>();

  has(providerId: string): boolean {
    return this.configured.has(providerId);
  }

  configure(providerId: string): void {
    this.configured.add(providerId);
  }

  unconfigure(providerId: string): void {
    this.configured.delete(providerId);
  }
}
