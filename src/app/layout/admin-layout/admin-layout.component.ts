import { Component } from '@angular/core';
import { TenantService } from '../../core/services/tenant.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: false,
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  constructor(
    private tenantService: TenantService,
    private authService: AuthService,
  ) {}

  get tenant() {
    return this.tenantService.current;
  }

  logout() {
    this.authService.logout();
  }
}
