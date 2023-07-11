import { TestBed } from '@angular/core/testing';

import { FidelService } from './fidel.service';

describe('FidelService', () => {
  let service: FidelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FidelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
