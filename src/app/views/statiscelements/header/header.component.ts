import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean;
  mainPage = 'Strona Główna';
  allGames = 'Wszystkie Gry';
  rank = 'Ranking';
  rules = 'Regulamin';
  help = 'Pomoc';
  logIn = 'Zaloguj się';
  account = 'Konto';
  //
  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.isUserLogged = false;
  }

}
