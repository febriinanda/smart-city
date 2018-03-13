import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { 
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
 } from '@angular/common/http';

@Injectable()
export class AuthService {
  private baseUrl:any;
  private appId:any;
  constructor(private http:HttpClient, private request: HttpRequest<any>, private next: HttpHandler) { 
    this.baseUrl = "/api/";
    this.appId = "62f2b5ed4";
  }

  tokenRequest(): Observable<any>{
    this.request = this.request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.appId}`
      }
    });

    this.next.handle(this.request);
    return this.http.post(this.baseUrl + "vendor/tokenrequest", null);
  }

}
