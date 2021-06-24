import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {PRODUCTS} from "./mock-products";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  product: Product = {} as Product;

  constructor() {
  }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Product {
    let products = this.getProducts();
    let value = products.subscribe()
    for (let i = 0; i < products.)
  }

  // addProduct(name: string, price: number, amount: number) {
  //   const id = PRODUCTS.length;
  //   PRODUCTS.push(new Prod)
  //   PRODUCTS.push(new Product(id, name, price, amount));
  // }

}
