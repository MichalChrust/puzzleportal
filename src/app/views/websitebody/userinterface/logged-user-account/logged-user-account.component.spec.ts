import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserAccountComponent } from './logged-user-account.component';

describe('LoggedUserAccountComponent', () => {
  let component: LoggedUserAccountComponent;
  let fixture: ComponentFixture<LoggedUserAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedUserAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
