import { TestBed } from '@angular/core/testing';

import { CbookService } from './cbook.service';

describe('CbookService', () => {
  let service: CbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
