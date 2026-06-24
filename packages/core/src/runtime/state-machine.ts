export type RouteStatus = 'PENDING' | 'OPERATOR_ACTIVATED' | 'PAUSED' | 'FAILED' | 'SETTLED';

export interface RouteState {
  routeId: string;
  status: RouteStatus;
  lastUpdated: number;
}

export class RouteStateMachine {
  static transition(current: RouteState, next: RouteStatus): RouteState {
    // Deterministic transition logic
    return { ...current, status: next, lastUpdated: Date.now() };
  }
}
