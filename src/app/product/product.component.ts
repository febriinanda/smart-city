import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  imgUrl: string;
  selProduct: any;

  constructor(public _product: ProductService, public auth: AuthService) {
    
   }

  ngOnInit() {
    this.products = {};
    this.selProduct = {
      packages: {
        data:[]
      }
    }
    this.imgUrl = "http://wiztalk.co/"
    this.auth.tokenRequest().subscribe(
      result=>{
        this.auth.token = result.token;
        this.listProducts();
      }
    );
  }

  listProducts(){
    this._product.getListProducts().subscribe(
      result => {
        this.products = result.data;
        console.log(this.products);
      }
    );
  }

  showDetail(item: any){
    console.log("show detail");
    this.selProduct = item;
    console.log(this.selProduct);
  }

  closeModal(){
    this.selProduct = {
      packages: {
        data:[]
      }
    }
    console.log(this.selProduct);
  }

}
