import { NETWORKS, getNetworkDescriptor } from '../../packages/core/src/networks';
import { generateRouteCandidates } from '../../packages/core/src/routes';

describe('network registry', () => {
  test('registers fourteen target networks', () => {
    expect(NETWORKS).toHaveLength(14);
  });

  test('registers the RANNTA X-Chain native identity', () => {
    const rannTa = getNetworkDescriptor('RANNTA_XCHAIN');
    expect(rannTa.chainId).toBe(13113);
    expect(rannTa.nativeAssetSymbol).toBe('RNTX');
    expect(rannTa.nativeAssetDecimals).toBe(18);
  });

  test('generates 182 unique directed non-self routes', () => {
    const routes = generateRouteCandidates();
    expect(routes).toHaveLength(182);
    expect(new Set(routes.map((route) => route.routeId)).size).toBe(182);
    expect(routes.every((route) => route.sourceNetwork !== route.targetNetwork)).toBe(true);
  });
});
