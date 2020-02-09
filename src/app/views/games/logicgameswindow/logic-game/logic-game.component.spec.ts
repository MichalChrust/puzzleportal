import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicGameComponent } from './logic-game.component';

describe('LogicGameComponent', () => {
  let component: LogicGameComponent;
  let fixture: ComponentFixture<LogicGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
