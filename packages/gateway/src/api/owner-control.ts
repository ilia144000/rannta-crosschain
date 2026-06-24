export interface OwnerControlAPI {
  pauseAll(): void;
  resumeAll(): void;
  configureRouteCapacity(routeId: string, amount: string): void;
}
