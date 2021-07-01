import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  sectionName: string = "Author: "
  authorName: string = "Rafał Sochacki";
  authorIndex: string = "s20047";

  constructor() {
  }

  ngOnInit(): void {
  }

}
