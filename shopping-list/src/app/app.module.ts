import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductsPoolComponent} from './products/product-pool/product-pool.component';
import {ProductComponent} from './products/product/product.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {WelcomeComponent} from "./home/welcome.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProductsPoolComponent,
    ProductComponent,
    ProductsListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'wecome', component: WelcomeComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
