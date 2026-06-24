# Exchange Integration Branch Plan
# Repository: rannta-exchange
# Branch Name: feat/crosschain-integration-control

1. Scope: Only implement ExchangeIntegrationProxy.
2. Constraints:
   - No Nginx changes.
   - No Fee Schedule changes.
   - No production activation.
   - UI must only display status 'OFFLINE' or 'INITIALIZING' until Phase C12.
3. Verification: Must be testable against mocked local Cross-Chain Core.
