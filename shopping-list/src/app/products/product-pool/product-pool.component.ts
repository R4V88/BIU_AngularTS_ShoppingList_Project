import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../product/product";
import {Subscription} from "rxjs";
import {ProductService} from "../product/product.service";
import {Router} from "@angular/router";


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
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addCreatedProduct(newProduct: IProduct) {
    const product: IProduct = {
      "id": this.getIndex(this.allProducts),
      "name": newProduct.name,
      "price": newProduct.price,
      "amount": newProduct.amount,
      "sum": newProduct.price * newProduct.amount,
      "isSelected" : false
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
