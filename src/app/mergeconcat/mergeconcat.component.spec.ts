import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeconcatComponent } from './mergeconcat.component';

describe('MergeconcatComponent', () => {
  let component: MergeconcatComponent;
  let fixture: ComponentFixture<MergeconcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MergeconcatComponent]
    });
    fixture = TestBed.createComponent(MergeconcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
