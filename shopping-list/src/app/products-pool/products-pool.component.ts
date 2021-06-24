import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-products-pool',
  templateUrl: './products-pool.component.html',
  styleUrls: ['./products-pool.component.css']
})
export class ProductsPoolComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
