import { TestBed } from '@angular/core/testing';

import { DataCategoryService } from './data-category.service';

describe('DataCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCategoryService = TestBed.get(DataCategoryService);
    expect(service).toBeTruthy();
  });
});
