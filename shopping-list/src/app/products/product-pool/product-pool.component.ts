import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../product/product";
import {Subscription} from "rxjs";
import {ProductService} from "../product/product.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './product-pool.component.html',
  styleUrls: ['./product-pool.component.css']
})
export class ProductPoolComponent implements OnInit, OnDestroy{

  pageTitle = 'Product Pool'
  sub!: Subscription;
  products: IProduct[] = [];
  errorMessage = '';

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/welcome'])
  }
}
