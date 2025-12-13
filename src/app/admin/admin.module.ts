import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
