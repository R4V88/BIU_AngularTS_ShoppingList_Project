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
  products!: IProduct[];
  totalPrice!: number;
  name!: string;
  price!: string;
  amount!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newList = {
      "products": [{
        "name": this.name,
        "price": this.price,
        "amount": this.price,
      }],
    }

    // this.onAddList.emit(newList);
    //TODO Wysłać do product-list. component
  }

}
