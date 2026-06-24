import { BaseAdapter } from './base-adapter';

export class AdapterRegistry {
  private adapters: Map<string, BaseAdapter> = new Map();

  register(networkId: string, adapter: BaseAdapter) {
    this.adapters.set(networkId, adapter);
  }

  getAdapter(networkId: string): BaseAdapter | undefined {
    return this.adapters.get(networkId);
  }
}
