import {Component} from "@angular/core";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'shopping-list',
  templateUrl: 'shoppingList.component.html'
})

export class ShoppingListComponent {
  public tomato = new ProductComponent("Tomato", 1.25, 1);
  public butter = new ProductComponent("Butter", 5, 1);
  public roll = new ProductComponent("Roll", 0.69, 1);
  public roll_2 = new ProductComponent("Roll", 0.69, 2);


  // public list = [this.tomato, this.roll, this.butter, this.roll_2];
  public list: ProductComponent[];
  // private uniqueProducts: ProductComponent[];

  constructor() {
    this.list = [this.tomato, this.roll, this.butter, this.roll_2];
  }

  // public recalculateList(list: ProductComponent[]): ProductComponent[]{
  //   let uniqueProducts = [];
  //   // list.sort((a, b) => a.productName < b.productName ? -1 : 1);
  //   for (let i = 0; i < list.length; i++) {
  //     for (let j = i + 1; j < list.length; i++) {
  //       if (list[i].productName.toUpperCase() == list[j].productName.toUpperCase()) {
  //         list[i].productAmount += list[j].productAmount;
  //         uniqueProducts.push(list[i]);
  //       }
  //       uniqueProducts.push(list[i]);
  //     }
  //   }
  //   return this.list = uniqueProducts;
  // }

}
