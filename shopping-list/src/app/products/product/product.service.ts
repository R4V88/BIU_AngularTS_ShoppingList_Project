import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products/products.json';

  private allProducts: Observable<IProduct[]> = this.getProducts();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
      return this.allProducts.pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    )

  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getAllProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.id === id))
      );
  }

  getProductByName(name: string): Observable<IProduct | undefined> {
    return this.getAllProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.name === name))
      )
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
