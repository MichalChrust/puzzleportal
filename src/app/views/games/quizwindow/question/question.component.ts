import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  /**
   * Question data
   */
  @Input() question;
  /**
   * Object responsible for sending data outside component to game-component
   */
  @Output() choosedAnswerEmitter = new EventEmitter<{id: number, answer: string}>();

  choosedAnswer: string;
  /**
   * field used to check if is it question printed in result-component
   */
  @Input() isItResult;
  /**
   * userAnswer is external value for this component and can be null, to allow null value it is converted to localUserAnswer,
   * which cannot be null
   */
  @Input() userAnswer;
  localUserAnswer = 'z';
  ifAnswerIsCorrect;

  constructor() {
  }

  ngOnInit() {
    /**
     * This
     */
    if (this.isItResult) {
      this.localUserAnswer = this.userAnswer.answer;
      this.ifAnswerIsCorrect = (this.localUserAnswer === this.question.correct);
    }
  }

  /**
   * Method responsible for marking
   * @param id
   * @param answer
   */
  chooseAnswer(id: number, answer: string) {
    this.choosedAnswer = answer;
    this.choosedAnswerEmitter.emit({id, answer});
  }

  /**
   * this method is responsible for collecting data about
   * @param answer
   */
  checkAnswer(answer: string) {
    if ((this.isItResult) && (this.localUserAnswer === answer) && (this.ifAnswerIsCorrect)) {
      return '#33cc33';
    } else if ((this.isItResult) && (this.localUserAnswer === answer) && (!this.ifAnswerIsCorrect)) {
      return '#ff0000';
    } else if ((this.isItResult) && (this.question.correct === answer) && (!this.ifAnswerIsCorrect)) {
      return '#666633';
    } else {
      return '#545454';
    }
  }


}
