import { Component } from '@angular/core';
import { MainService } from '../../../core/services/main.service';
// import { MainService } from '../../core/../core/services/main.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  // stats$ = this.mainService.getDashboardStats();

  constructor(private mainService: MainService) {}
}
