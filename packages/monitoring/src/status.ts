export class SystemMonitor {
  static reportFailure(routeId: string, reason: string) {
    console.error('CRITICAL_FAILURE:', { routeId, reason, timestamp: Date.now() });
  }
}
