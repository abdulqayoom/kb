import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilelayoutComponent1 } from './tilelayout.component';

describe('TilelayoutComponent', () => {
  let component: TilelayoutComponent1;
  let fixture: ComponentFixture<TilelayoutComponent1>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TilelayoutComponent1]
    });
    fixture = TestBed.createComponent(TilelayoutComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
