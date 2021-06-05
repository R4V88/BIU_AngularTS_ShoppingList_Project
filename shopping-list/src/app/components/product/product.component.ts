import {Component, Inject} from "@angular/core";

@Component({
  selector: 'product',
  templateUrl: 'product.component.html'
})

export class ProductComponent {
  private _productName: string;
  private _productPrice: number;
  private _productAmount: number;


  constructor(@Inject(String)productName: string, @Inject(Number)productPrice: number, @Inject(Number)productAmount: number) {
    this._productName = productName;
    this._productPrice = productPrice;
    this._productAmount = productAmount;
  }


  get productName(): string {
    return this._productName;
  }

  set productName(value: string) {
    this._productName = value;
  }

  get productPrice(): number {
    return this._productPrice;
  }

  set productPrice(value: number) {
    this._productPrice = value;
  }

  get productAmount(): number {
    return this._productAmount;
  }

  set productAmount(value: number) {
    this._productAmount = value;
  }

}
