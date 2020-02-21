import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuizService} from '../../../../services/quiz-service';
import {QuizShortcut} from '../../../../models/QuizShortcut';

@Component({
  selector: 'app-quiz-left-label',
  templateUrl: './quiz-left-label.component.html',
  styleUrls: ['./quiz-left-label.component.css']
})
export class QuizLeftLabelComponent implements OnInit {
  quizList: Array<QuizShortcut>;

  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit() {
    // @properLogic
    this.quizService.getQuizList().subscribe((quizList) => {
      this.quizList = quizList;
    });
    // mock @LukeHawthorne
    this.quizList = [
      {
        id: 0,
        quizName: 'Zwierzyniec',
        category: 'Przyroda'
      },
      {
        id: 1,
        quizName: 'Planeta',
        category: 'Przyroda'
      },
      {
        id: 2,
        quizName: 'Today!',
        category: 'Kultura masowa'
      },
      {
        id: 3,
        quizName: 'Sekrety TV',
        category: 'Kultura masowa'
      },
      {
        id: 4,
        quizName: 'Jak jeść by nie dostać zawału',
        category: 'Lifestyle'
      },
      {
        id: 5,
        quizName: 'Ekologia',
        category: 'Przyroda'
      },
      {
        id: 6,
        quizName: 'Gry komputerowe',
        category: 'Kultura masowa'
      }
    ];
  }

  go(id) {
    this.router.navigate(['/quizgame/' + id], {state: {data: this.quizList[id].id}});
  }
}
