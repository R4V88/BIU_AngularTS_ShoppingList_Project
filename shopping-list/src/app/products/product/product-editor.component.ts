import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
import {ProductPoolComponent} from "../product-pool/product-pool.component";
import {IProductEditor} from "./product-editor";
import {of} from "rxjs";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent{
  // products = this.productService.getProducts();
  product: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    price: ['', Validators.required],
    amount: ['', Validators.required]
  })

  productPool?: ProductPoolComponent;

  constructor(private fb: FormBuilder) {
  // this.productForm = fb.group({
  //   name: fb.control('initial value', Validators.required),
  //   price: fb.control('initial value', Validators.required),
  //   amount: fb.control('initial value', Validators.required)
  // })
  }

  // productForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   amount: new FormControl('')
  // })

  ngOnInit() : void {
    // this.product = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   price: ['', Validators.required],
    //   amount: ['', Validators.required]
    // })
  }

  onSubmit(value: any) {
    this.productPool?.addCreatedProduct(value.name, value.price, value.number);
    console.warn('Your product has been added', this.product.value);
    console.log(value.name.toString());
    this.product.reset();
  }
}


