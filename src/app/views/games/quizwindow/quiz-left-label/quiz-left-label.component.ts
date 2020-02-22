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
      console.log(quizList);
    });
  }

  go(id) {
    this.router.navigate(['/quizgame/' + id], {state: {data: this.quizList[id]}});
  }
}
