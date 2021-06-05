import {Component} from "@angular/core";

@Component({
  selector: 'product',
  templateUrl: 'product.component.html'
})

export class ProductComponent {
  private _name: string;
  private _price: number;
  private _amount: number;

  constructor(name: string, price: number, amount: number) {
    this._name = name;
    this._price = price;
    this._amount = amount;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  public onion = new ProductComponent("Onion", 0.89, 1);
  public potato = new ProductComponent("Potato", 1, 1);
  public tomato = new ProductComponent("Tomato", 1.25, 1);
  public bread = new ProductComponent("Bread", 2.50, 1);
  public butter = new ProductComponent("Butter", 5, 1);
  public roll = new ProductComponent("Roll", 0.69, 1)

}
