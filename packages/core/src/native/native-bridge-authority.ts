export interface NativeBridgeAuthority {
  lock(amount: string, recipient: string): Promise<string>;
  unlock(evidence: string): Promise<void>;
  getStatus(): 'OPERATIONAL' | 'EMERGENCY_PAUSED';
}
