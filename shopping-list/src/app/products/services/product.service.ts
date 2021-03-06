import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../entity/product";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5000/products'

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl)
  }

  getProductById(id: string): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.id === id))
      );
  }

  getProductByName(name: string): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.name === name))
      );
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, product, httpOptions);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product, httpOptions);
  }

  deleteProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<IProduct>(url);
  }
}
