import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../../services/quiz-service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  quiz;
  answers;
  points;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quiz = history.state.questions;
    this.answers = history.state.answers;
    this.points = 0;
    this.countResult();
    this.quizService.sendResult(this.points).subscribe();
  }

  countResult() {
    for (let i = 0; i < this.quiz.questions.length; i++) {
      if (this.quiz.questions[i].correct === this.answers[i].answer) {
        this.points += 1;
      }
    }
  }
}
