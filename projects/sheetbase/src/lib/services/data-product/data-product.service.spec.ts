import { TestBed } from '@angular/core/testing';

import { DataProductService } from './data-product.service';

describe('DataProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProductService = TestBed.get(DataProductService);
    expect(service).toBeTruthy();
  });
});
