export interface ReserveInvariant {
  totalLockedSource: string;
  totalMintedTarget: string;
  lastVerifiedBlock: number;
}

export function verifyReserveInvariant(invariant: ReserveInvariant): boolean {
  // In a 1:1 canonical bridge, locked source must perfectly strictly equal minted target.
  return invariant.totalLockedSource === invariant.totalMintedTarget;
}
