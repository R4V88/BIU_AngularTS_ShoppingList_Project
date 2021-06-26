import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IProductAdd} from "./product-add";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<IProductAdd> = new EventEmitter();
  name!: string;
  price!: number;
  amount!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.productPool.addCreatedProduct(this.name, this.price, this.amount);
    // console.warn('Your product has been added', this.name);
    // console.log(this.name.toString());
    if(!this.name || this.name.length <= 2) {
      alert('Please add a correct name!');
      return;
    }
    if(this.amount <= 0) {
      alert('Please enter correct amount!');
      return;
    }
    if(this.price <= 0) {
      alert('Please enter correct value!');
      return;
    }

    const newProduct = {
      "name": this.name,
      "price": this.price,
      "amount": this.amount
    };

    this.onAddProduct.emit(newProduct)
    // console.log(this.name, this.amount, this.price)
    // console.log('nie wiem: ' + newProduct.name);

    this.name = '';
    this.amount = 0;
    this.price = 0;
  }
}
