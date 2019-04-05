import { TestBed } from '@angular/core/testing';

import { SovellusService } from './sovellus.service';

describe('SovellusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SovellusService = TestBed.get(SovellusService);
    expect(service).toBeTruthy();
  });
});
