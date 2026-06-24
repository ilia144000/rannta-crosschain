export interface NativeBridgeEvent {
  routeId: string;
  receiptId: string;
  reference: string;
  amountBaseUnits: string;
}

export interface NodeIntegrationLayer {
  observeNativeEvent(event: NativeBridgeEvent): Promise<void>;
  verifyReserveInvariant(): boolean;
}
