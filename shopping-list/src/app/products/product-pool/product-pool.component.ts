import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../entity/product";
import {ProductService} from "../services/product.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {IdGeneratorService} from "../services/id-generator.service";
import {faPencilRuler} from "@fortawesome/free-solid-svg-icons/faPencilRuler";

@Component({
  selector: 'app-product-pool',
  templateUrl: './product-pool.component.html',
  styleUrls: ['./product-pool.component.css']
})
export class ProductPoolComponent implements OnInit {

  pageTitle = 'Product Pool'
  products: IProduct[] = [];
  errorMessage = '';
  faTimes = faTimes;
  faPencil = faPencilRuler;

  //product sending to product edit component
  productToSend!: IProduct;

  @Input() productToAdd!: IProduct;
  @Input() productToEdit!: IProduct;

  constructor(private productService: ProductService,
              private idGenerator: IdGeneratorService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products))
  }

  addCreatedProduct(product: IProduct) {
    const newProduct: IProduct = {
      "id": this.idGenerator.generateRandomValueId(),
      "name": product.name,
      "price": product.price,
      "amount": product.amount,
      "totalPrice": product.price * product.amount,
      "isSelected": false
    };
    this.productService.addProduct(newProduct).subscribe((product) => this.products.push(product));
  }

  editSelectedProduct(product: IProduct) {
    this.productService.updateProduct(product).subscribe((product) => this.products.push(product));
  }

  getLastItemIndex(list: IProduct[]): number {
    return list.length + 1;
  }

  onDelete(product: IProduct) {
    this.productService
      .deleteProduct(product)
      .subscribe(() => (this.products = this.products.filter((p: IProduct) => p.id !== product.id)))
  }

  onEdit(product: IProduct): void{
    this.productToSend = product;
  }
}
