import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public _product: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts(){
    this._product.getListProducts().subscribe(
      result => {
        console.log(result);
        
      }
    );
  }

}
