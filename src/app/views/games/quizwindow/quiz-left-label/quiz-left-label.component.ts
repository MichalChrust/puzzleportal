import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Categories} from '../../../../models/Categories';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-quiz-left-label',
  templateUrl: './quiz-left-label.component.html',
  styleUrls: ['./quiz-left-label.component.css']
})
export class QuizLeftLabelComponent implements OnInit {
  categories: Categories;
  games;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.categories = new Categories();
    // TODO
    // connect it with backend
    this.games = [
      {
        id: 0,
        category: '0'
      },
      {
        id: 1,
        category: '0'
      },
      {
        id: 2,
        category: '2'
      },
      {
        id: 3,
        category: '2'
      },
      {
        id: 4,
        category: '1'
      },
      {
        id: 5,
        category: '0'
      },
      {
        id: 6,
        category: '2'
      }
    ];
  }

  go(id) {
    this.router.navigate(['/quizgame/' + id], {state: {data: this.games [id]}});
  }
}
