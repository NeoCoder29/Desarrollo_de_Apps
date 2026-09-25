import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesTabComponent } from './componentes-tab.component';

describe('ComponentesTabComponent', () => {
  let component: ComponentesTabComponent;
  let fixture: ComponentFixture<ComponentesTabComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
