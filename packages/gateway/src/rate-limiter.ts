export interface RateLimitPolicy {
  maxRequestsPerSecond: number;
  maxRequestsPerDay: number;
  timeoutMs: number;
}

export interface CircuitBreakerState {
  status: 'CLOSED' | 'OPEN' | 'HALF_OPEN';
  failureCount: number;
  lastFailureTimestamp?: number;
}

export interface SecurityPolicy {
  rateLimit: RateLimitPolicy;
  circuitBreaker: CircuitBreakerState;
}
