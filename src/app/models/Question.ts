export class Question {
  id: number;
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;


  constructor(id: number, question: string, a: string, b: string, c: string, d: string, correct: string) {
    this.id = id;
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.correct = correct;
  }
}
