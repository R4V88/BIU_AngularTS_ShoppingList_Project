import {Component} from "@angular/core";

@Component({
  selector: 'product',
  templateUrl: 'product.component.html'
})

export class ProductComponent {
  private _productName: string;
  private _productPrice: number;
  private _productAmount: number;


  constructor(productName: string, productPrice: number, productAmount: number) {
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

  public onion = new ProductComponent("Onion", 0.89, 1);
  public potato = new ProductComponent("Potato", 1, 1);
  public tomato = new ProductComponent("Tomato", 1.25, 1);
  public bread = new ProductComponent("Bread", 2.50, 1);
  public butter = new ProductComponent("Butter", 5, 1);
  public roll = new ProductComponent("Roll", 0.69, 1)

}
