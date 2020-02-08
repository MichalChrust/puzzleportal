import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  articles = [
    new Article('Ruszamy!', '25.01.2019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
      'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
      'ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
      ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
      ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Article('Drugi wpis!', '30.01.2019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
      'ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
      ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
      ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  ]
  constructor() { }

  ngOnInit() {
  }
  writeArticle(){
   this.articles.push(new Article('nowy Post', '3.03.2019', 'kolejny post'));
  }
}

export class Article {
  head;
  date;
  body;

  constructor(head, date, body) {
    this.head = head;
    this.date = date;
    this.body = body;
  }
}
