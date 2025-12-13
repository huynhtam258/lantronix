import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class MainService {
  constructor(private api: ApiService) { }

  getDashboardStats(): Observable<any> {
    return this.api.get('/dashboard/stats');
  }

  getSeoContent(slug: string): Observable<any> {
    return this.api.get('/pages/seo', { slug });
  }
}
