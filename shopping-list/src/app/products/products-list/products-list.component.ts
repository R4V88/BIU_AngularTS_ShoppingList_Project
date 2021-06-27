import {Component, OnInit} from '@angular/core';
import {ProductPoolComponent} from "../product-pool/product-pool.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productPool: ProductPoolComponent) {
  }

  ngOnInit(): void {
    // this.productPool.allProducts();
  }

}
