import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../product/product";
import {Subscription} from "rxjs";
import {ProductService} from "../product/product.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-product-pool',
  templateUrl: './product-pool.component.html',
  styleUrls: ['./product-pool.component.css']
})
export class ProductPoolComponent implements OnInit {

  pageTitle = 'Product Pool'
  products: IProduct[] = [];

  // sub!: Subscription;

  product!: IProduct;
  errorMessage = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products))
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  addCreatedProduct(product: IProduct) {
    const newProduct: IProduct = {
      "id": this.getIndex(this.products),
      "name": product.name,
      "price": product.price,
      "amount": product.amount,
      "sum": product.price * product.amount,
      "isSelected" : false
    };
    this.productService.addProduct(newProduct).subscribe((product) => this.products.push(product));
  }

  getIndex(list: IProduct[]): number{
    return list.length + 1;
  }

  // onBack(): void {
  //   this.router.navigate(['/welcome'])
  // }
}
