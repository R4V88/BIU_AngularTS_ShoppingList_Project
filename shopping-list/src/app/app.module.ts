import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductPoolComponent} from './products/product-pool/product-pool.component';
import {ProductComponent} from './products/product/product.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {WelcomeComponent} from "./home/welcome.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddProductComponent } from './products/product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPoolComponent,
    ProductComponent,
    ProductsListComponent,
    WelcomeComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'products', component: ProductPoolComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
