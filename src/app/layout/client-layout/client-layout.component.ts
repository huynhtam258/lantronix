import { Component } from '@angular/core';
import { TenantService } from '../../core/services/tenant.service';

@Component({
  selector: 'app-client-layout',
  standalone: false,
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss'],
})
export class ClientLayoutComponent {
  constructor(private tenantService: TenantService) {}

  get tenant() {
    return this.tenantService.current;
  }
}
