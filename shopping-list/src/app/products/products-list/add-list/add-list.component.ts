import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IList} from "../../entity/list";
import {IProduct} from "../../entity/product";

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  @Output() onAddList: EventEmitter<IList> = new EventEmitter();
  lists!: IList[];
  title!: string;
  id!: number;
  products!: IProduct[];
  selectedPrice: number = 0;
  unselectedPrice: number = 0;
  totalPrice: number = 0;

  constructor() {
  }

  ngOnInit(): void {
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
