import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateTimePickersPage } from './date-time-pickers.page';

describe('DateTimePickersPage', () => {
  let component: DateTimePickersPage;
  let fixture: ComponentFixture<DateTimePickersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePickersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
