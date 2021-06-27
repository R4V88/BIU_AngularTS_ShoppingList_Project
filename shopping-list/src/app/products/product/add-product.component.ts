import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IProduct} from "./product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<IProduct> = new EventEmitter();
  name!: string;
  price!: number;
  amount!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name || this.name.length <= 2) {
      alert('Please add a correct name!');
      return;
    }
    if (this.amount <= 0) {
      alert('Please enter correct amount!');
      return;
    }
    if (this.price <= 0) {
      alert('Please enter correct value!');
      return;
    }

    const newProduct = {
      "name": this.name,
      "price": this.price,
      "amount": this.amount
    };

    this.onAddProduct.emit(newProduct)

    this.name = '';
    this.amount = 0;
    this.price = 0;
  }
}
