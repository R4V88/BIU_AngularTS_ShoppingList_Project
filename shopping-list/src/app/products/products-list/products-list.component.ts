import {Component, OnInit} from '@angular/core';
import {IProduct} from "../entity/product";
import {ProductService} from "../services/product.service";
import {IList} from "../entity/list";
import {ListService} from "../services/list.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit {


  pageTitle = "Products List";
  errorMessage = '';
  products: IProduct[] = [];
  lists: IList[] =[];

  constructor(private productService: ProductService,
              private listService: ListService) {
  }

  toggleAddProduct() {
    console.log('toggle');
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
    this.listService.getLists().subscribe((lists) => this.lists = lists);
  }

  getListUsingTrackBy(index: number, list: IList): number {
    return list.id;
  }
}
