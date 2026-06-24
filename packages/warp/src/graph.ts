import { RoutePlan } from './models';
import { QuoteNormalization } from './quotes';

export interface MultiStepRouteGraph {
  nodes: string[];
  edges: RoutePlan[];
}

export interface RouteComparisonOutput {
  planId: string;
  quote: QuoteNormalization;
  rankScore: number;
}

export function rankRoutes(comparisons: RouteComparisonOutput[]): RouteComparisonOutput[] {
  return comparisons.sort((a, b) => b.rankScore - a.rankScore);
}
