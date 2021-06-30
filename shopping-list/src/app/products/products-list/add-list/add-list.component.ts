import {Component, Input, OnInit} from '@angular/core';
import {IList} from "../../entity/list";
import {IProduct} from "../../entity/product";
import {Observable, of, Subscription} from "rxjs";

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
  products!: IProduct[];
  selectedPrice!: number;
  unselectedPrice!: number;
  totalPrice!: number;
  sub!: Subscription;
  errorMessage: string = '';


  constructor() {
    this.selectedProduct = {
      "id": '',
      "name": '',
      "price": 0,
      "amount": 0,
      "totalPrice": 0,
      "isSelected": false
    }
    this.products.push(this.selectedProduct);
  }
  ngOnInit(): void {
    this.sub = this.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
    // this.getProducts().subscribe((products) => this.products = products);
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
    console.log("toggle");
  }


}
