import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product/product";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './product-pool.component.html',
  styleUrls: ['./product-pool.component.css']
})
export class ProductPoolComponent implements OnInit {
  pageTitle = 'Product Pool'
  sub!: Subscription;

  constructor() {
  }

  ngOnInit(): void {
  }

}
