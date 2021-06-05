import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {ProductPoolComponent} from "./components/productPool/productPool.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductPoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
