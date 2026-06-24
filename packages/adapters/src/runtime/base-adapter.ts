export interface AdapterConfig {
  networkId: string;
  isActive: boolean;
}

export abstract class BaseAdapter {
  constructor(protected config: AdapterConfig) {}

  abstract getCapability(): 'AVAILABLE' | 'UNAVAILABLE' | 'DISABLED';
  
  isExecutable(): boolean {
    return this.config.isActive && this.getCapability() === 'AVAILABLE';
  }
}
