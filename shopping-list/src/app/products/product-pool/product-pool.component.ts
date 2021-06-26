import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../product/product";
import {observable, Observable, Subscription} from "rxjs";
import {ProductService} from "../product/product.service";
import {Router} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {IProductAdd} from "../product/product-add";


@Component({
  templateUrl: './product-pool.component.html',
  styleUrls: ['./product-pool.component.css']
})
export class ProductPoolComponent implements OnInit, OnDestroy {

  pageTitle = 'Product Pool'
  sub!: Subscription;
  product!: IProduct;

  errorMessage = '';
  allProducts: IProduct[] = [];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.productService.getAllProducts().subscribe({
      next: products => {
        this.allProducts = products;
      },
      error: err => this.errorMessage = err
    });

    const productObservable = this.productService.getAllProducts();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addCreatedProduct(newProduct: IProductAdd) {
    const product: IProduct = {
      "id": this.getIndex(this.allProducts),
      "name": newProduct.name,
      "price": newProduct.price,
      "amount": newProduct.amount,
      "sum": newProduct.price * newProduct.amount
    };
    this.allProducts.push(product);
  }

  getIndex(list: IProduct[]): number{
    return list.length + 1;
  }

  onBack(): void {
    this.router.navigate(['/welcome'])
  }
}
