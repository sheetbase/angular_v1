import { TestBed } from '@angular/core/testing';

import { DataBundleService } from './data-bundle.service';

describe('DataBundleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBundleService = TestBed.get(DataBundleService);
    expect(service).toBeTruthy();
  });
});
