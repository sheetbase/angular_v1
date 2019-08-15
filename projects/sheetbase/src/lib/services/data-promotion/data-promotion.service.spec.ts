import { TestBed } from '@angular/core/testing';

import { DataPromotionService } from './data-promotion.service';

describe('DataPromotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPromotionService = TestBed.get(DataPromotionService);
    expect(service).toBeTruthy();
  });
});
