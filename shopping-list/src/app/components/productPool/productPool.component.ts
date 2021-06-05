import {Component} from "@angular/core";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'product-pool',
  templateUrl: 'productPool.component.html'
})

export class ProductPoolComponent {
  public products: ProductComponent[];

  public onion = new ProductComponent("Onion", 0.89, 1);
  public potato = new ProductComponent("Potato", 1, 1);
  public tomato = new ProductComponent("Tomato", 1.25, 1);
  public bread = new ProductComponent("Bread", 2.50, 1);
  public butter = new ProductComponent("Butter", 5, 1);
  public roll = new ProductComponent("Roll", 0.69, 1)

  constructor() {
    this.products = [
      this.onion,
      this.potato,
      this.tomato,
      this.bread,
      this.butter,
      this.roll
    ]
  }

  public addProduct(productName: string, productValue: number, productAmount: number) {
    let newProduct = new ProductComponent(productName, productValue, productAmount);
    this.products.push(newProduct);
  }


}
