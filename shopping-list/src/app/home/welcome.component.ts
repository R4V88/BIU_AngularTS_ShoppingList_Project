import {Component} from '@angular/core';

@Component({
  styleUrls: ['./welcome.component.css'],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome in shopping-list app';
  navProductList: string = "Add List";
}
