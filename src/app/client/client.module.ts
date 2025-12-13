import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from '../layout/client-layout/client-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ClientLayoutComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClientRoutingModule,
    SharedModule
],
  providers: [Title, Meta],
})
export class ClientModule {}
