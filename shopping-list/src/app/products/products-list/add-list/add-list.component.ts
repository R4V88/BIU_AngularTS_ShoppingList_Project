import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IList} from "../../entity/list";
import {IProduct} from "../../entity/product";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  // @Output() onAddList: EventEmitter<IList> = new EventEmitter();
  @Input() selectedProduct!: IProduct;

  lists!: IList[];
  title!: string;
  id!: number;
  products: IProduct[] = [];
  selectedPrice!: number;
  unselectedPrice!: number;
  totalPrice!: number;

  constructor() {
    this.selectedProduct = {
      amount: 0,
      name: '',
      price: 0
    }
    this.products.push(this.selectedProduct)
    this.getProducts().subscribe((products) => this.products = products);
  }

  ngOnInit(): void {
  }

  getProducts(): Observable<IProduct[]> {
    return of(this.products);
  }

  // onSubmit() {
  //   const newList = {
  //     "products": [{
  //       "name": this.name,
  //       "price": this.price,
  //       "amount": this.price,
  //     }],
  //   }
  // }

  toggleAddList() {

  }


}
