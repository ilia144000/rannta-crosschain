export type CapabilityStatus = 'DESIGN_ONLY' | 'TESTED' | 'PILOT_READY' | 'EXECUTABLE';

export interface NetworkCapability {
  network: string;
  status: CapabilityStatus;
}

export const NETWORK_CAPABILITIES: NetworkCapability[] = [
  { network: 'RANNTA_XCHAIN', status: 'PILOT_READY' },
  { network: 'TON', status: 'PILOT_READY' }
];
