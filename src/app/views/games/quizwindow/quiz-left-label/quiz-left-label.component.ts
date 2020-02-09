import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-left-label',
  templateUrl: './quiz-left-label.component.html',
  styleUrls: ['./quiz-left-label.component.css']
})
export class QuizLeftLabelComponent implements OnInit {
  games = [
    {
      id: 1,

    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  go(id) {
    this.router.navigate(['/logicgame/' + id], {state: {data: this.games[id]}});
  }
}
