import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.error('Global error:', error);

    const router = this.injector.get(Router);
    // Redirecting to a specific page error.
    // router.navigate(['/error']);
  }
}
