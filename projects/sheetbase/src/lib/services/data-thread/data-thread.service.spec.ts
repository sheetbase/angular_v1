import { TestBed } from '@angular/core/testing';

import { DataThreadService } from './data-thread.service';

describe('DataThreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataThreadService = TestBed.get(DataThreadService);
    expect(service).toBeTruthy();
  });
});
