import { CrossChainGateway } from '../packages/gateway/src/service/gateway';

describe('Gateway Security Invariants', () => {
  test('should throw error when gateway is paused (Fail-Closed)', () => {
    const gateway = new CrossChainGateway();
    
    // Simulate Owner action: Pause system
    gateway.bridge.emergency.pause();
    
    const intent = { sourceAsset: 'RNTX', targetAsset: 'wRNTX', amount: '100' };
    
    // Expectation: System MUST fail
    expect(() => {
      gateway.executeRoute(intent);
    }).toThrow('GATEWAY_HALTED_BY_OWNER');
  });

  test('should execute when operational', () => {
    const gateway = new CrossChainGateway();
    gateway.bridge.emergency.resume();
    
    const intent = { sourceAsset: 'RNTX', targetAsset: 'wRNTX', amount: '100' };
    const result = gateway.executeRoute(intent);
    
    expect(result.isExecutable).toBe(true);
  });
});
