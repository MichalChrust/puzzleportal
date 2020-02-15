import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSuccesfullyCreatedComponent } from './account-succesfully-created.component';

describe('AccountSuccesfullyCreatedComponent', () => {
  let component: AccountSuccesfullyCreatedComponent;
  let fixture: ComponentFixture<AccountSuccesfullyCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSuccesfullyCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSuccesfullyCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
