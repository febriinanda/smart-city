import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpRequest } from "@angular/common/http";
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from "./token.interceptor";
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    ProductService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
