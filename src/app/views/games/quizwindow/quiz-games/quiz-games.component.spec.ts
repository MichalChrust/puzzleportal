import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGamesComponent } from './quiz-games.component';

describe('QuizGamesComponent', () => {
  let component: QuizGamesComponent;
  let fixture: ComponentFixture<QuizGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
