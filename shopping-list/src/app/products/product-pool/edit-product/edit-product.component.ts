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

  //force reload page component after Product update.
  reloadCurrentPage() {
    window.location.reload();
  }
}
