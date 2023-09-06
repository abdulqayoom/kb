import { TestBed } from '@angular/core/testing';

import { MergeconcatService } from './mergeconcat.service';

describe('MergeconcatService', () => {
  let service: MergeconcatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeconcatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
