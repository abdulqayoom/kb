import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledComboComponent } from './disabled-combo.component';

describe('DisabledComboComponent', () => {
  let component: DisabledComboComponent;
  let fixture: ComponentFixture<DisabledComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisabledComboComponent]
    });
    fixture = TestBed.createComponent(DisabledComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
