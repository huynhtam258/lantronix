import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree {
    // SSR
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    const isAuth = this.authService.isAuthenticated();
    const expectedRole = route.data['role'] as 'admin' | 'client' | undefined;
    if (!isAuth) {
      return this.router.createUrlTree(['/']); // login
    }

    if (expectedRole) {
      const role = this.authService.getCurrentUserRole();
      if (role !== expectedRole) {
        return this.router.createUrlTree(['/']);
      }
    }

    return true;
  }
}
