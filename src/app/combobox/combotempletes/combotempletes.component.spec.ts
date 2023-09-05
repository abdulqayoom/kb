import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombotempletesComponent } from './combotempletes.component';

describe('CombotempletesComponent', () => {
  let component: CombotempletesComponent;
  let fixture: ComponentFixture<CombotempletesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombotempletesComponent]
    });
    fixture = TestBed.createComponent(CombotempletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
