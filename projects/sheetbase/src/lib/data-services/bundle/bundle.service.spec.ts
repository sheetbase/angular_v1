import { TestBed } from '@angular/core/testing';

import { BundleService } from './bundle.service';

describe('BundleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BundleService = TestBed.get(BundleService);
    expect(service).toBeTruthy();
  });
});
