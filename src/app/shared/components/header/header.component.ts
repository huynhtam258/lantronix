import { Component } from '@angular/core';
import { TenantService } from '../../../core/services/tenant.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {
  constructor(private tenantService: TenantService) {}

  get tenant() {
    return this.tenantService.current;
  }
}
