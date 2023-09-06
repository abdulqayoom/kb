import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapopComponent } from './mapop.component';

describe('MapopComponent', () => {
  let component: MapopComponent;
  let fixture: ComponentFixture<MapopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapopComponent]
    });
    fixture = TestBed.createComponent(MapopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
