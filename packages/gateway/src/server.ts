export interface GatewayServerDescriptor {
  serviceName: string;
  transport: 'HTTP';
  routePrefix: string;
}

export const gatewayServerDescriptor: GatewayServerDescriptor = {
  serviceName: 'RANNTA Cross-Chain Gateway',
  transport: 'HTTP',
  routePrefix: '/api/crosschain'
};
