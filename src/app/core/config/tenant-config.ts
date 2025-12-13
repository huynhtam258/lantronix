export interface TenantConfig {
  id: string;
  name: string;
  apiBaseUrl: string;
  logoUrl: string;
  primaryColor?: string;
}

export const DEFAULT_TENANT: TenantConfig = {
  id: 'default',
  name: 'Default Tenant',
  apiBaseUrl: 'https://api.example.com',
  logoUrl: '/assets/logo-default.svg',
  primaryColor: '#0d6efd',
};

export const TENANTS_BY_HOST: Record<string, TenantConfig> = {
  'localhost:4200': {
    id: 'dev',
    name: 'Dev Tenant',
    apiBaseUrl: 'https://dev-api.example.com',
    logoUrl: '/assets/logo-dev.svg',
    primaryColor: '#6610f2',
  },
  'staging.example.com': {
    id: 'staging',
    name: 'Staging Tenant',
    apiBaseUrl: 'https://stg-api.example.com',
    logoUrl: '/assets/logo-stg.svg',
    primaryColor: '#20c997',
  },
  'app.example.com': {
    id: 'prod',
    name: 'Production Tenant',
    apiBaseUrl: 'https://api.example.com',
    logoUrl: '/assets/logo-prod.svg',
    primaryColor: '#0d6efd',
  },
};
