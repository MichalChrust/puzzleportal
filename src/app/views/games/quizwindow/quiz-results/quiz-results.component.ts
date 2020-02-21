import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  quiz;
  answers;
  points: number;

  constructor() { }

  ngOnInit() {
    this.quiz = history.state.questions;
    this.answers = history.state.answers;
    console.log(this.quiz);
    console.log(this.answers);
  }

  countResult() {
    for (let i = 0; i < this.quiz.size; i++) {

    }
  }
}
