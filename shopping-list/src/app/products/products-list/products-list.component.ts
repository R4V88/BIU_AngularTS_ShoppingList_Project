import {Component, OnInit} from '@angular/core';
import {ProductPoolComponent} from "../product-pool/product-pool.component";
import {Router} from "@angular/router";
import {IProduct} from "../product/product";
import {Subscription} from "rxjs";
import {ProductService} from "../product/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit {


  pageTitle = "Products List";
  errorMessage = '';
  products: IProduct[] = []
  sub!: Subscription;

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => this.products = products);
  }

  onBack(): void {
    this.router.navigate(['/welcome'])
  }

}
