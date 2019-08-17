import { TestBed } from '@angular/core/testing';

import { DataPropertyService } from './data-property.service';

describe('DataPropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPropertyService = TestBed.get(DataPropertyService);
    expect(service).toBeTruthy();
  });
});
