import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TenantService } from './tenant.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private tenantService: TenantService,
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private get tokenKey(): string {
    return `token_${this.tenantService.id}`;
  }

  private get roleKey(): string {
    return `role_${this.tenantService.id}`;
  }

  getTokenSafe(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getTokenSafe();
  }

  getCurrentUserRole(): 'admin' | 'client' | null {
    if (!this.isBrowser()) return null;
    return (localStorage.getItem(this.roleKey) as any) ?? null;
  }

  loginMock(role: 'admin' | 'client') {
    if (!this.isBrowser()) return;
    localStorage.setItem(this.tokenKey, 'dummy-token');
    localStorage.setItem(this.roleKey, role);
  }

  logout() {
    if (!this.isBrowser()) return;
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
  }
}
