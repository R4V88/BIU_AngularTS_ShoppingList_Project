import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../entity/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  name!: string;
  price!: number;
  amount!: number;
  @Input() selectedProduct!: IProduct;
  @Output() onEditProduct: EventEmitter<IProduct> = new EventEmitter();

  constructor() {
    this.selectedProduct = {
      amount: 0,
      name: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }


  editProduct() {

    // if(this.name.length){
    //   return this.name;
    // } else {
    //   return this.selectedProduct.name;
    // }
    //
    // if(this.amount != 0){
    //   return this.amount;
    // } else {
    //   return this.selectedProduct.amount;
    // }
    //
    // if(this.name.length){
    //   return this.name;
    // } else {
    //   return this.selectedProduct.name;
    // }


    const editedProduct: IProduct = {
      "id": this.selectedProduct.id,
      "name": this.name,
      "price": this.price,
      "amount": this.amount,
      "totalPrice": this.price * this.amount,
      "isSelected": false
    }
    this.onEditProduct.emit(editedProduct);
  }
  reloadCurrentPage() {
    window.location.reload();
  }
}
