import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logic-games-left-label',
  templateUrl: './logic-games-left-label.component.html',
  styleUrls: ['./logic-games-left-label.component.css']
})
export class LogicGamesLeftLabelComponent implements OnInit {
  games = [
    {
      text: 'Zagadka 1',
      keywords: [
        {
          numberOfKeyword: 1,
          keyword: 'pierwsze słowo kluczowe',
          answer: 'pierwsza podpowiedź',
          isThadEnd: false,
        },
        {
          numberOfprompt: 2,
          keyword: 'drugie słowo kluczowe',
          answer: 'druga podpowiedź',
          isThatEnd: true,
        }
      ]
    },
    {
      text: 'Zagadka 2',
      keywords: [
        {
          numberOfKeyword: 1,
          keyword: 'pierwsze słowo kluczowe',
          answer: 'pierwsza podpowiedź',
          isThadEnd: false,
        },
        {
          numberOfKeyword: 2,
          keyword: 'drugie słowo kluczowe',
          answer: 'druga podpowiedź',
          isThatEnd: true,
        }
      ]
    },
    {
      text: 'Zagadka 3',
      keywords: [
        {
          numberOfKeyword: 1,
          keyword: 'pierwsze słowo kluczowe',
          answer: 'pierwsza podpowiedź',
          isThadEnd: false,
        },
        {
          numberOfKeyword: 2,
          keyword: 'drugie słowo kluczowe',
          answer: 'druga podpowiedź',
          isThatEnd: true,
        }
      ]
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }
  go(id) {
    this.router.navigate(['/logicgame/' + id], {state: {data: this.games[id]}});
  }
}
