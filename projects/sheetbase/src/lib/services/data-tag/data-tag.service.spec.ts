import { TestBed } from '@angular/core/testing';

import { DataTagService } from './data-tag.service';

describe('DataTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTagService = TestBed.get(DataTagService);
    expect(service).toBeTruthy();
  });
});
