import { NetworkKey, NETWORKS } from './networks';
import { RouteCapability } from './capabilities';

export interface RouteCandidate {
  routeId: string;
  sourceNetwork: NetworkKey;
  targetNetwork: NetworkKey;
  capability: RouteCapability;
}

export function createRouteId(sourceNetwork: NetworkKey, targetNetwork: NetworkKey): string {
  return `${sourceNetwork}_TO_${targetNetwork}`;
}

export function generateRouteCandidates(): RouteCandidate[] {
  const routes: RouteCandidate[] = [];

  for (const source of NETWORKS) {
    for (const target of NETWORKS) {
      if (source.key === target.key) {
        continue;
      }

      routes.push({
        routeId: createRouteId(source.key, target.key),
        sourceNetwork: source.key,
        targetNetwork: target.key,
        capability: 'IMPLEMENTED_LOCAL'
      });
    }
  }

  return routes;
}

export const routeCandidates = generateRouteCandidates();
