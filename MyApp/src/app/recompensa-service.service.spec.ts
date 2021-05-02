import { TestBed } from '@angular/core/testing';

import { RecompensaServiceService } from './recompensa-service.service';

describe('RecompensaServiceService', () => {
  let service: RecompensaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecompensaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
