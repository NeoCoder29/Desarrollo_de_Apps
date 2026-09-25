import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingPage } from './routing.page';

describe('RoutingPage', () => {
  let component: RoutingPage;
  let fixture: ComponentFixture<RoutingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
