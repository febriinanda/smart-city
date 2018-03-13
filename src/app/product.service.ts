import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private baseUrl:any;

  constructor(private http: HttpClient) {
    
  }

  getListProducts(): Observable<any>{
    return this.http.get("/api/vendor/listproduct");
  }

}
