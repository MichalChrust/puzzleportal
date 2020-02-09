import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicGamesComponent } from './logic-games.component';

describe('LogicGamesComponent', () => {
  let component: LogicGamesComponent;
  let fixture: ComponentFixture<LogicGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
