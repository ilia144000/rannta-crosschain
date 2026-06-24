import { Network, NETWORKS } from './networks';
import { RouteCapability } from './capabilities';

export interface RouteCandidate {
  routeId: string;
  sourceNetwork: Network;
  targetNetwork: Network;
  capability: RouteCapability;
}

export function generateRouteCandidates(): RouteCandidate[] {
  const routes: RouteCandidate[] = [];
  for (const source of NETWORKS) {
    for (const target of NETWORKS) {
      if (source !== target) {
        routes.push({
          routeId: source.replace(/\s+/g, '_').toUpperCase() + '_TO_' + target.replace(/\s+/g, '_').toUpperCase(),
          sourceNetwork: source,
          targetNetwork: target,
          capability: 'NOT_PROVISIONED'
        });
      }
    }
  }
  return routes;
}

export const routeCandidates = generateRouteCandidates();
