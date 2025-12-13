import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { REQUEST } from '@angular/core';
import type { Request } from 'express';

import {
  DEFAULT_TENANT,
  TENANTS_BY_HOST,
  TenantConfig,
} from '../config/tenant-config';

@Injectable({ providedIn: 'root' })
export class TenantService {
  private _tenant: TenantConfig | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(REQUEST) private request: Request | null, // SSR: request, CSR: null
  ) {}

  private resolveHost(): string {
    // SSR
    if (isPlatformServer(this.platformId) && this.request) {
      const host = this.request.headers?.host;
      return (host ?? '').toLowerCase();
    }

    // CSR
    if (isPlatformBrowser(this.platformId)) {
      return window.location.host.toLowerCase();
    }

    // fallback (build, SSG…)
    return '';
  }

  private resolveTenant(): TenantConfig {
    const host = this.resolveHost();
    if (!host) {
      return DEFAULT_TENANT;
    }

    return TENANTS_BY_HOST[host] ?? DEFAULT_TENANT;
  }
  
  get current(): TenantConfig {
    if (!this._tenant) {
      this._tenant = this.resolveTenant();
    }
    return this._tenant;
  }

  get id(): string {
    return this.current.id;
  }

  get apiBaseUrl(): string {
    return this.current.apiBaseUrl;
  }
}
