import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logic-games',
  templateUrl: './logic-games.component.html',
  styleUrls: ['./logic-games.component.css']
})
export class LogicGamesComponent implements OnInit {
  games = [
    {
      text: 'pierwsza gra',
      content: 'witamy w pierwszej grze!'
    },
    {
      text: 'druga gra',
      content: 'witamy w drugiej grze!'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  go(id) {
    this.router.navigate(['/logicgame/' + id], {state: {data: this.games[id]}});
  }

}
