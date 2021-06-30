import {Injectable} from '@angular/core';
import {IProduct} from "../entity/product";
import {Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserTempListService{

  private subject = new Subject<any>();

  sendProduct(product: IProduct) {
    this.subject.next(product);
  }

  clearProduct() {
    this.subject.next();
  }

  onProduct(): Observable<any> {
    return this.subject.asObservable();
  }
}
