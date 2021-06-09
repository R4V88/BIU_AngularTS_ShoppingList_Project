import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductsPoolComponent} from './products-pool/products-pool.component';
import {ProductsComponent} from './products/products.component';
import {ProductsListComponent} from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPoolComponent,
    ProductsComponent,
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
