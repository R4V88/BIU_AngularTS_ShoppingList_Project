import {Component, Input, OnInit} from '@angular/core';
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
  @Input() selectedProduct = <any>{};

  // @Output() onEditProduct: EventEmitter<IProduct> = new EventEmitter();
  // oldProductArray: any[] = this.getOldProductProperties();
  // oldName: string = this.oldProductArray[1];

  constructor() {
    // console.log(this.selectedProduct.id)
  }

  ngOnInit(): void {
  }

  // getOldProductProperties(): any[] {
  //   for (let o in this.selectedProduct) {
  //     this.oldProductArray.push(this.o);
  //   }
  // }


  // editProduct() {
  //   // const newProduct: IProduct = this.selectedProduct
  //   const editedProduct: IProduct = {
  //     "id": this.oldProduct.id,
  //     "name": product.name,
  //     "price": product.price,
  //     "amount": product.amount,
  //     "totalPrice": product.price * product.amount,
  //     "isSelected": false
  //   }
  //   this.onEditProduct.emit(editedProduct);
  // }
}
