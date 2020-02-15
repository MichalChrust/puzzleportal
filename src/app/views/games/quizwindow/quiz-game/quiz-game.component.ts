import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})
export class QuizGameComponent implements OnInit {
  id;
  game;

  constructor() { }
  ngOnInit() {
    const data = history.state.data;
    this.id = data['id'];
    // TODO
    // connect it with backend
    this.game = [
        {
          id: this.id,
          questions: [
            {
              question: 'Pierwsze pytanie',
              answers: [
                {
                  a: 'Pierwsza odpowiedź',
                  b: 'Druga odpowiedź',
                  c: 'Trzecia odpowiedź',
                  d: 'Czwarta opowiedź'
                }
              ],
              correct: 'a',
            },
            {
              question: 'Drugie pytanie',
              answers: [
                {
                  a: 'Pierwsza odpowiedź',
                  b: 'Druga odpowiedź',
                  c: 'Trzecia odpowiedź',
                  d: 'Czwarta opowiedź'
                }
              ],
              correct: 'a',
            },
            {
              question: 'Trzecie pytanie',
              answers: [
                {
                  a: 'Pierwsza odpowiedź',
                  b: 'Druga odpowiedź',
                  c: 'Trzecia odpowiedź',
                  d: 'Czwarta opowiedź'
                }
              ],
              correct: 'a',
            }
          ]

        }
      ];
  }

}
