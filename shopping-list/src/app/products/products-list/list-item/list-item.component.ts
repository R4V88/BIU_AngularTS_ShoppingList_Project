import {Component, OnInit} from '@angular/core';
import {IList} from "../../entity/list";
import {ListService} from "../../services/list.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  pageTitle = "Shopping lists"
  errorMessage = '';
  lists: IList[] = [];
  faTimes = faTimes;

  constructor(private listService: ListService) {
  }

  ngOnInit(): void {
    this.listService.getLists().subscribe((lists) => this.lists = lists);
    console.log(this.lists);
  }

  getListUsingTrackBy(index: number, list: IList): number {
    return list.id;
  }

  onDelete(list: IList) {
    this.listService
      .deleteList(list)
      .subscribe(() => (this.lists = this.lists.filter((l: IList) => l.id !== list.id)))
  }
}
