import {Component, OnInit} from '@angular/core';
import {IProduct} from "../entity/product";
import {ProductService} from "../services/product.service";
import {ListService} from "../services/list.service";
import {UserTempListService} from "../services/user-temp-list.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit {

  pageTitle = "Products List";
  errorMessage = '';
  products: IProduct[] = [];

  constructor(private productService: ProductService,
              private listService: ListService,
              private userList: UserTempListService) {
  }

  sendProduct(product: IProduct): void {
    this.userList.sendProduct(product);
  }

  clearProduct(): void {
    this.userList.clearProduct();
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }
}
