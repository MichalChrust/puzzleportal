import {Question} from './Question';

export class Quiz {
  id: number;
  questions: Array<Question>;

  constructor(id: number, questions: Array<Question>) {
    this.id = id;
    this.questions = questions;
  }
}
