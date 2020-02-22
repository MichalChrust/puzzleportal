import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {isBoolean} from 'util';
import {toBoolean} from '@a.grisevich/ng-zorro-antd/src/core/util/convert';

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
    // @ProperLogic
    //  this.accountService.checkIfUserIsLogged().subscribe((isUserLogged) => {
    //    this.isUserLogged = toBoolean(isUserLogged);
    //  });
    // mock @LukeHawthorne
    this.isUserLogged = true;
  }

}
