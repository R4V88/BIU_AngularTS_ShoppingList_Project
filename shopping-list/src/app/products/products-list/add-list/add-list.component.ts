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
  selectedPrice!: number;
  unselectedPrice!: number;
  totalPrice!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newList = {
      "products": this.products,
    }

    // this.onAddList.emit(newList);
    //TODO Wysłać do product-list. component
  }

}
