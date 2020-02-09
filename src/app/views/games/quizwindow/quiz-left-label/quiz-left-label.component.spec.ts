import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLeftLabelComponent } from './quiz-left-label.component';

describe('QuizLeftLabelComponent', () => {
  let component: QuizLeftLabelComponent;
  let fixture: ComponentFixture<QuizLeftLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizLeftLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLeftLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
