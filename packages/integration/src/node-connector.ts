export interface NodeIntegrationLayer {
  onNativeLock(event: any): Promise<void>;
  onNativeUnlock(event: any): Promise<void>;
  verifyReserveInvariant(): boolean;
}
