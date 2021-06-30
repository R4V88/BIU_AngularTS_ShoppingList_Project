import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IList} from "../../entity/list";
import {IProduct} from "../../entity/product";
import {Subscription} from "rxjs";
import {UserTempListService} from "../../services/user-temp-list.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {ListService} from "../../services/list.service";
import {IdGeneratorService} from "../../services/id-generator.service";


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  lists!: IList[];
  title!: string;
  id!: number;

  products: IProduct[] = [];
  subscription!: Subscription;

  selectedPrice: number = 0;
  totalPrice: number = 0;
  unselectedPrice: number = 0;

  errorMessage: string = '';
  faTimes = faTimes

  @Output() onAddList: EventEmitter<IProduct> = new EventEmitter();

  constructor(private userList: UserTempListService,
              private listService: ListService,
              private idGenerator: IdGeneratorService) {

    this.subscription = this.userList.onProduct().subscribe(product => {
      if (product) {
        this.products.push(product);
        this.getTotalPrice(product);
      } else {
        this.products = [];
      }
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete(index: number): void {
    this.totalPrice -= Number(this.products[index].totalPrice);

    if (this.products[index].isSelected)
      this.selectedPrice -= Number(this.products[index].totalPrice);

    if (!this.products[index].isSelected)
      this.unselectedPrice -= Number(this.products[index].totalPrice);

    this.products.splice(index, 1);
  }

  getTotalPrice(product: IProduct): void {
    this.totalPrice += Number(product.totalPrice);
    this.unselectedPrice += Number(product.totalPrice);
  }

  selectProduct($event: Event, i: number): void {
    this.products[i].isSelected = !this.products[i].isSelected;
    if (this.products[i].isSelected) {
      this.selectedPrice += Number(this.products[i].totalPrice);
      this.unselectedPrice -= Number(this.products[i].totalPrice);
    } else {
      this.selectedPrice -= Number(this.products[i].totalPrice);
      this.unselectedPrice += Number(this.products[i].totalPrice);
    }
  }

  addList() {
    const newList: IList = {
      "title": this.title,
      "id": this.idGenerator.getRandomNumberId(),
      "products": this.products,
      "selectedPrice": this.selectedPrice,
      "unselectedPrice": this.unselectedPrice,
      "totalPrice": this.totalPrice
    };

    this.listService.addList(newList).subscribe((list) => this.lists.push(list));

    this.title = '';
    this.totalPrice = 0;
    this.selectedPrice = 0;
    this.unselectedPrice = 0;
    this.products = [];
  }
}

