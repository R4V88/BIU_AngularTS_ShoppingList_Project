import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IList} from "../../entity/list";
import {IProduct} from "../../entity/product";

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
  // name!: string;
  // price!: number;
  // amount!: number;
  selectedPrice!: number;
  unselectedPrice!: number;
  totalPrice!: number;

  constructor() {
    this.selectedProduct = {
      amount: 0,
      name: '',
      price: 0
    }
    console.log("Received Product" + this.selectedProduct.name);
  }

  addReceivedProduct(): void {
    if(this.selectedProduct) {
      this.products.push(this.selectedProduct);
    }
    console.log(this.products);
  }

  ngOnInit(): void {
    this.addReceivedProduct()
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
