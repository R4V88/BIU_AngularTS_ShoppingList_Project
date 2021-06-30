import {Component, Input, OnInit} from '@angular/core';
import {IList} from "../../entity/list";
import {IProduct} from "../../entity/product";
import {Subject, Subscription} from "rxjs";
import {UserTempListService} from "../../services/user-temp-list.service";

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


  constructor(private userList: UserTempListService) {
    this.subscription = this.userList.onProduct().subscribe(product => {
      if(product) {
        this.products.push(product);
      } else {
        this.products = [];
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}

  toggleAddList() {
    console.log("toggle");
  }

}

