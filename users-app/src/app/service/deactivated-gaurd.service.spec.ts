import { TestBed } from '@angular/core/testing';

import { DeactivatedGaurdService } from './deactivated-gaurd.service';

describe('DeactivatedGaurdService', () => {
  let service: DeactivatedGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivatedGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
