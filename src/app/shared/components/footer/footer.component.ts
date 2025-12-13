import { Component } from '@angular/core';
import { TenantService } from '../../../core/services/tenant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  year = new Date().getFullYear();

  constructor(private tenantService: TenantService) {}

  get tenant() {
    return this.tenantService.current;
  }
}
