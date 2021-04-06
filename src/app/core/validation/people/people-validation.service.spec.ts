import { TestBed } from '@angular/core/testing';

import { PeopleValidationService } from './people-validation.service';

describe('PeopleValidationService', () => {
  let service: PeopleValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
