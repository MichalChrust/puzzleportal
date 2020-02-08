import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftlabelComponent } from './leftlabel.component';

describe('LeftlabelComponent', () => {
  let component: LeftlabelComponent;
  let fixture: ComponentFixture<LeftlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
