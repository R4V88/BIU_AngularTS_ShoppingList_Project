import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IProduct} from "../entity/product";
import {Subscription} from "rxjs";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit {


  pageTitle = "Products List";
  errorMessage = '';
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  toggleAddProduct() {
    console.log('toggle');
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }
}
