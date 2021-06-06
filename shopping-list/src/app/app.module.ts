import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {ProductPoolComponent} from "./components/productPool/productPool.component";
import {ShoppingListComponent} from "./components/shoppingList/shoppingList.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductPoolComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
