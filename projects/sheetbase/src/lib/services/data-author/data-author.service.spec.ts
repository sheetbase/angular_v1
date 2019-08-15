import { TestBed } from '@angular/core/testing';

import { DataAuthorService } from './data-author.service';

describe('DataAuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAuthorService = TestBed.get(DataAuthorService);
    expect(service).toBeTruthy();
  });
});
