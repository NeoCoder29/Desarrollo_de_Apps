import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingActionButtonPage } from './floating-action-button.page';

describe('FloatingActionButtonPage', () => {
  let component: FloatingActionButtonPage;
  let fixture: ComponentFixture<FloatingActionButtonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingActionButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
