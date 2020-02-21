import {Component, OnInit} from '@angular/core';
import {Answer} from '../../../../models/Answer';
import {QuizService} from '../../../../services/quiz-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})
export class QuizGameComponent implements OnInit {
  /**
   * Quiz ID
   */
  id;
  /**
   * Quiz data
   */
  quiz;
  /**
   * Array of quiz answers
   */
  answers: Answer[];

  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit() {
    const data = history.state.data;
    this.id = data.id;
    // @properLogic
    this.quizService.getQuiz(this.id).subscribe((quiz) => {
      this.quiz = quiz;
    })
    // mock @LukeHawthorne
    this.quiz = {
      id: this.id,
      questions: [
        {
          id: 0,
          question: 'Pierwsze pytanie',
          a: 'Pierwsza odpowiedź',
          b: 'Druga odpowiedź',
          c: 'Trzecia odpowiedź',
          d: 'Czwarta opowiedź',
          correct: 'a',
        },
        {
          id: 1,
          question: 'Drugie pytanie',
          a: 'Pierwsza odpowiedź',
          b: 'Druga odpowiedź',
          c: 'Trzecia odpowiedź',
          d: 'Czwarta opowiedź',
          correct: 'a',
        },
        {
          id: 2,
          question: 'Trzecie pytanie',
          a: 'Pierwsza odpowiedź',
          b: 'Druga odpowiedź',
          c: 'Trzecia odpowiedź',
          d: 'Czwarta opowiedź',
          correct: 'a',
        },
        {
          id: 3,
          question: 'Czy wiewiórki jedzą kasztany',
          a: 'Trochę jedzą, trochę nie',
          b: 'Spytaj jej',
          c: 'Nie wiem ale się wypowiem',
          d: 'Lubie placki',
          correct: 'a',
        }
      ]
    };
    this.answers = new Array(this.quiz.questions.length);
  }
  addAnswer(answerData: {id: number, answer: string}) {
    this.answers[answerData.id] = new Answer(answerData.id, answerData.answer);
  }
  showResults(id) {
    this.router.navigate(['/quizgame/' + id + '/results'], {state: {questions: this.quiz, answers: this.answers}});
  }
}
