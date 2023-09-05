import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridEditFormComponent } from './kendo-grid-edit-form.component';

describe('KendoGridEditFormComponent', () => {
  let component: KendoGridEditFormComponent;
  let fixture: ComponentFixture<KendoGridEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KendoGridEditFormComponent]
    });
    fixture = TestBed.createComponent(KendoGridEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
