export type OwnerCommandKind =
  | 'ENABLE_ROUTE'
  | 'DISABLE_ROUTE'
  | 'PAUSE_ROUTE'
  | 'RESUME_ROUTE'
  | 'ACTIVATE_NETWORK'
  | 'DEACTIVATE_NETWORK'
  | 'CONFIGURE_ROUTE_CAPACITY'
  | 'CONFIGURE_PROVIDER'
  | 'REPLACE_PROVIDER'
  | 'REPLACE_ADAPTER'
  | 'CONFIGURE_FEES'
  | 'START_RECOVERY'
  | 'CANCEL_RECOVERY'
  | 'DEPLOY_UPGRADE'
  | 'ROLLBACK_UPGRADE';

export interface OwnerCommand {
  commandId: string;
  kind: OwnerCommandKind;
  routeId: string | null;
  payloadReference: string | null;
  createdAt: number;
}

export interface OwnerControlAPI {
  createCommand(command: OwnerCommand): OwnerCommand;
  listCommands(): readonly OwnerCommand[];
}
