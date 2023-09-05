import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingComboBoxesComponent } from './cascading-combo-boxes.component';

describe('CascadingComboBoxesComponent', () => {
  let component: CascadingComboBoxesComponent;
  let fixture: ComponentFixture<CascadingComboBoxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CascadingComboBoxesComponent]
    });
    fixture = TestBed.createComponent(CascadingComboBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
