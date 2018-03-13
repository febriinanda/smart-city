import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from "./token.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
