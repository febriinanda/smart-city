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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    OrderModule 
  ],
  providers: [
    ProductService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
