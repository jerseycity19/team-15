import { TestBed } from '@angular/core/testing';

import { FormsServiceService } from './forms-service.service';

describe('FormsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsServiceService = TestBed.get(FormsServiceService);
    expect(service).toBeTruthy();
  });
});
