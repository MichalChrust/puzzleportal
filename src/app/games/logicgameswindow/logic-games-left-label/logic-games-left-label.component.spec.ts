import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicGamesLeftLabelComponent } from './logic-games-left-label.component';

describe('LogicGamesLeftLabelComponent', () => {
  let component: LogicGamesLeftLabelComponent;
  let fixture: ComponentFixture<LogicGamesLeftLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicGamesLeftLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicGamesLeftLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
