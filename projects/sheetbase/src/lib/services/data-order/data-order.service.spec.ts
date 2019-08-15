import { TestBed } from '@angular/core/testing';

import { DataOrderService } from './data-order.service';

describe('DataOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataOrderService = TestBed.get(DataOrderService);
    expect(service).toBeTruthy();
  });
});
