export type RouteStateName =
  | 'CREATED'
  | 'PLANNED'
  | 'SOURCE_OBSERVED'
  | 'SOURCE_FINALIZED'
  | 'DESTINATION_SUBMITTED'
  | 'DESTINATION_CONFIRMED'
  | 'SETTLED'
  | 'FAILED'
  | 'RECOVERY_REQUIRED';

export interface RouteStateRecord {
  routeId: string;
  state: RouteStateName;
  updatedAt: number;
  reason: string | null;
}

export function createRouteState(routeId: string): RouteStateRecord {
  return {
    routeId,
    state: 'CREATED',
    updatedAt: Date.now(),
    reason: null
  };
}
