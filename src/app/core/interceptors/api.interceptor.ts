import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TenantService } from '../services/tenant.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private tenantService: TenantService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let cloned = req;

    cloned = cloned.clone({
      setHeaders: {
        'X-Tenant-Id': this.tenantService.id,
      },
    });

    const token = this.authService.getTokenSafe();
    if (token) {
      cloned = cloned.clone({
        setHeaders: {
          ...cloned.headers.keys().reduce(
            (acc, key) => ({ ...acc, [key]: cloned.headers.get(key)! }),
            {},
          ),
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(cloned);
  }
}
