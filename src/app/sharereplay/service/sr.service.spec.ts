import { TestBed } from '@angular/core/testing';

import { SRService } from './sr.service';

describe('SRService', () => {
  let service: SRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
