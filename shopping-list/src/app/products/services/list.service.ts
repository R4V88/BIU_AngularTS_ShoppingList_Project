import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IList} from "../entity/list";
import {IProduct} from "../entity/product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class ListService {

  private apiUrl = 'http://localhost:5000/lists'

  constructor(private http: HttpClient) {
  }

  getLists(): Observable<IList[]> {
    return this.http.get<IList[]>(this.apiUrl)
  }

  deleteList(list: IList): Observable<IProduct> {
    const url = `${this.apiUrl}/${list.id}`;
    return this.http.delete<IProduct>(url);
  }
}
