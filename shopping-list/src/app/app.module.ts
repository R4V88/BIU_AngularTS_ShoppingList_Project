import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductsPoolComponent} from './products-pool/products-pool.component';
import {ProductComponent} from './product/product.component';
import {ProductsListComponent} from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPoolComponent,
    ProductComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
