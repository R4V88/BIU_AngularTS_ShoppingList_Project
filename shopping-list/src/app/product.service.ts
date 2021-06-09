import {Injectable} from '@angular/core';
import {PRODUCTSMCK} from "./mock-products";
import {Observable, of} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProductsMock(): Observable<Product[]> {
    const products = of(PRODUCTSMCK);
    return products;
  }

  getProductMock(id: number): Observable<Product> {
    const product = PRODUCTSMCK.find(p => p.id === id)!;
    return of(product);
  }

  // addProduct(name: string, price: number, amount: number) {
  //   const id = PRODUCTS.length;
  //   PRODUCTS.push(new Prod)
  //   PRODUCTS.push(new Product(id, name, price, amount));
  // }

}
