import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question;
  @Output() choosedAnswerEmitter = new EventEmitter<{id: number, answer: string}>();
  choosedAnswer: string;
  // used when print results
  @Input() isItResult;
  // userAnswer is external value for this component and can be null, to allow null value it is converted to localUserAnswer,
  // which cannot be null
  @Input() userAnswer;
  localUserAnswer = 'z';
  ifAnswerIsCorrect;

  constructor() {
  }

  ngOnInit() {
    console.log(this.question);
    if (this.isItResult) {
      console.log(this.question.correct);
      this.localUserAnswer = this.userAnswer.answer;
      this.ifAnswerIsCorrect = (this.localUserAnswer === this.question.correct);
      console.log(this.ifAnswerIsCorrect);
    }
  }

  chooseAnswer(id: number, answer: string) {
    this.choosedAnswer = answer;
    this.choosedAnswerEmitter.emit({id, answer});
  }

  checkAnswer(answer: string) {
    if (answer === this.question.correct) {
      return true;
    } else {
      return false;
    }
  }

  colorBlueOrRed() {

  }

  colorGreen() {

  }
  // checkQuestion(answer) {
  //   if (this.userAnswer === null) {
  //     return false;
  //   }
  //   if (answer === this.userAnswer.answer) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
