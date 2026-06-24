export interface SecurityPolicy {
  ownerAddress: string;
  minSignatures: number;
  emergencyPauseAuthority: string;
  allowSelfDestruct: boolean;
}

export const securityPolicy: SecurityPolicy = {
  ownerAddress: '0x0000000000000000000000000000000000000000',
  minSignatures: 1,
  emergencyPauseAuthority: 'OWNER_ONLY',
  allowSelfDestruct: false
};
