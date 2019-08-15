import { TestBed } from '@angular/core/testing';

import { DataUserService } from './data-user.service';

describe('DataUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataUserService = TestBed.get(DataUserService);
    expect(service).toBeTruthy();
  });
});
