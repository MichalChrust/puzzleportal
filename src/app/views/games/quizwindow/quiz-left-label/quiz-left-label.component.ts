import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Categories} from '../../../../models/Categories';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {CategoryService} from '../../../../services/category-service';

@Component({
  selector: 'app-quiz-left-label',
  templateUrl: './quiz-left-label.component.html',
  styleUrls: ['./quiz-left-label.component.css']
})
export class QuizLeftLabelComponent implements OnInit {
  categories: Array<Categories>;
  games;
  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
    // @properLogic
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
    // mock @LukeHawthorne
    this.categories = new Array<Categories>();
    this.categories.push(new Categories(0, 'Przyroda'));
    this.categories.push(new Categories(1, 'Lifestyle'));
    this.categories.push(new Categories(2, 'Kultura masowa'));
    // @properLogic
    
    // mock @LukeHawthorne
    this.games = [
      {
        id: 0,
        name: 'Zwierzyniec',
        category: '0'
      },
      {
        id: 1,
        name: 'Planeta',
        category: '0'
      },
      {
        id: 2,
        name: 'Today!',
        category: '2'
      },
      {
        id: 3,
        name: 'Sekrety TV',
        category: '2'
      },
      {
        id: 4,
        name: 'Jak jeść by nie dostać zawału',
        category: '1'
      },
      {
        id: 5,
        name: 'Ekologia',
        category: '0'
      },
      {
        id: 6,
        name: 'Gry komputerowe',
        category: '2'
      }
    ];
    console.log(this.categories[1].id);
  }

  go(id) {
    this.router.navigate(['/quizgame/' + id], {state: {data: this.games [id]}});
  }
}
