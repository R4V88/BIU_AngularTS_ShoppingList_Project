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
import {AddProductComponent} from './products/product/add-product.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPoolComponent,
    ProductComponent,
    ProductsListComponent,
    WelcomeComponent,
    AddProductComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'product', component: ProductPoolComponent},
      {path: 'list', component: ProductsListComponent},
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
