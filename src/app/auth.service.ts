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
  public token: string;
  constructor(private http:HttpClient) { 
    this.appId = "62f2b5ed4";
  }

  tokenRequest(): Observable<any>{
    console.log("Token Req");
    return this.http.post("api/vendor/tokenrequest", null, {
      headers: {
        'Authorization':`Bearer ${this.appId}`
      }});
  }

}
