import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitergirdComponent } from './fitergird.component';

describe('FitergirdComponent', () => {
  let component: FitergirdComponent;
  let fixture: ComponentFixture<FitergirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitergirdComponent]
    });
    fixture = TestBed.createComponent(FitergirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
