export class CapabilityRegistry {
  private allowedProviders: Set<string> = new Set(['INTERNAL_RANNTA_BRIDGE']);

  isProviderAllowed(id: string): boolean {
    return this.allowedProviders.has(id);
  }
  
  // Owner Controls
  disableProvider(id: string) { this.allowedProviders.delete(id); }
  enableProvider(id: string) { this.allowedProviders.add(id); }
}
