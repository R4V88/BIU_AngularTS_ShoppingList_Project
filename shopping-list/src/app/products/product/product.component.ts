import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../entity/product";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;
  @Output() onDeleteTask: EventEmitter<IProduct> = new EventEmitter();

  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {}

}
