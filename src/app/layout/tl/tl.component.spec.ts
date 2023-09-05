import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLComponent } from './tl.component';

describe('TLComponent', () => {
  let component: TLComponent;
  let fixture: ComponentFixture<TLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TLComponent]
    });
    fixture = TestBed.createComponent(TLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
