import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private baseUrl:any;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://wiztalk.co/api/vendor";
   }


  getListProducts(): Observable<any>{
    return this.http.get(this.baseUrl+"/listproducts");
  }

}
