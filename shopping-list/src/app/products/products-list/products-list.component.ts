import {Component, OnInit} from '@angular/core';
import {IProduct} from "../entity/product";
import {ProductService} from "../services/product.service";
import {IList} from "../entity/list";
import {ListService} from "../services/list.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit {

  pageTitle = "Products List";
  errorMessage = '';
  products: IProduct[] = [];
  productToSend!: IProduct;

  constructor(private productService: ProductService,
              private listService: ListService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

  getListUsingTrackBy(index: number, list: IList): number {
    return list.id;
  }

  onSelected(product: IProduct): void{
    this.productToSend = product;
    console.log("Product to send: " + this.productToSend.name);
  }
}
