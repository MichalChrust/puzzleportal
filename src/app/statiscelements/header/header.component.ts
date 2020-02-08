import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isUserLogged: boolean;
  mainPage = 'Strona Główna';
  allGames = 'Wszystkie Gry';
  rank = 'Ranking';
  rules = 'Regulamin';
  help = 'Pomoc';
  logIn = 'Zaloguj się';
  account = 'Konto';
  // userStatus = new UserstatusModel(false);
  //
  constructor() {
  }

  ngOnInit() {
  }

}
