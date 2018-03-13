import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class ProductService {
  private baseUrl:any;

  constructor(private http: HttpClient, public auth: AuthService) {
    
  }

  getListProducts(): Observable<any>{
    console.log("Get list products");
    
    return this.http.get("/api/vendor/listproduct",{
      headers:{
        'Authorization':`Bearer ${this.auth.token}`
      }
    })
  }
}
