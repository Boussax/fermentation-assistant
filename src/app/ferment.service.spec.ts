import { TestBed } from '@angular/core/testing';

import { FermentService } from './ferment.service';

describe('FermentService', () => {
  let service: FermentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FermentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
