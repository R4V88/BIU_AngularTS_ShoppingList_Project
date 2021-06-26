import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: IProduct | undefined
  errorMessage = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {}

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  addProduct(id: number, name: string, price: number, amount: number, sum: number): IProduct {
      return {id, name, price, amount, sum};
  }
}
