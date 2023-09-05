import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDataResultComponent } from './grid-data-result.component';

describe('GridDataResultComponent', () => {
  let component: GridDataResultComponent;
  let fixture: ComponentFixture<GridDataResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDataResultComponent]
    });
    fixture = TestBed.createComponent(GridDataResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
