import { TestBed } from '@angular/core/testing';

import { DataPageService } from './data-page.service';

describe('DataPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPageService = TestBed.get(DataPageService);
    expect(service).toBeTruthy();
  });
});
