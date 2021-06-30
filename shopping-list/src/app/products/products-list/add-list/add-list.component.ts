import {Component, Input, OnInit} from '@angular/core';
import {IList} from "../../entity/list";
import {IProduct} from "../../entity/product";
import {Observable, Subject, Subscription} from "rxjs";
import {UserTempListService} from "../../services/user-temp-list.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  // @Output() onAddList: EventEmitter<IList> = new EventEmitter();

  lists!: IList[];
  title!: string;
  id!: number;

  products: IProduct[] = [];
  subscription!: Subscription;

  selectedPrice!: number;
  unselectedPrice!: number;
  totalPrice!: number;

  errorMessage: string = '';
  faTimes = faTimes;

  constructor(private userList: UserTempListService) {
    this.subscription = this.userList.onProduct().subscribe(product => {
      if(product) {
        this.products.push(product);
      } else {
        this.products = [];
      }
    })
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(index: number) {
    this.products.splice(index,1);
  }

  addList() {
    console.log("toggle");
  }

  selectProduct($event: Event, i: number){
    this.products[i].isSelected = !this.products[i].isSelected;
  }

}

