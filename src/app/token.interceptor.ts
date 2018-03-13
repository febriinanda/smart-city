import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    appId: string;

  constructor() {
      this.appId = "$2y$10$9CzZYR88fFz4gSaB3LaEUu3W33JRgsbF\/pdZBwy8dkEO5K\/zQHgRK";
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.appId}`
      }
    });

    return next.handle(request);
  }
}