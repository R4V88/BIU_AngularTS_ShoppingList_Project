import {Component, OnInit} from '@angular/core';
import {IList} from "../../entity/list";
import {ListService} from "../../services/list.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  pageTitle = "Shopping lists"
  errorMessage = '';
  lists: IList[] = [];

  constructor(private listService: ListService) {
  }

  ngOnInit(): void {
    this.listService.getLists().subscribe((lists) => this.lists = lists);
    console.log(this.lists);
  }

  getListUsingTrackBy(index: number, list: IList): number {
    return list.id;
  }
}
