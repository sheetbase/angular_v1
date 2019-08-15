import { TestBed } from '@angular/core/testing';

import { DataVideoService } from './data-video.service';

describe('DataVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataVideoService = TestBed.get(DataVideoService);
    expect(service).toBeTruthy();
  });
});
