import { TestBed } from '@angular/core/testing';

import { DateCalcutationService } from './date-calcutation.service';

describe('DateCalcutationService', () => {
  let service: DateCalcutationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateCalcutationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
