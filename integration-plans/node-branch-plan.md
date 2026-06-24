# Node Integration Branch Plan
# Repository: rannta-network
# Branch Name: feat/crosschain-integration-control

1. Scope: Only implement NodeIntegrationProxy for native lock verification.
2. Constraints:
   - No contract deployment.
   - No Bridge enablement.
   - No production bridge registry changes.
   - Node must log interaction attempts without executing funds movement.
3. Verification: Must demonstrate fail-closed behavior on all invalid receipt inputs.
