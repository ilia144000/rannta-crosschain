export interface RuntimeControlReferences {
  primaryReference: string | null;
  signerReference: string | null;
  recoveryReference: string | null;
}

export const runtimeControlReferences: RuntimeControlReferences = {
  primaryReference: null,
  signerReference: null,
  recoveryReference: null
};
