import { TestBed } from '@angular/core/testing';

import { DataAudioService } from './data-audio.service';

describe('DataAudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAudioService = TestBed.get(DataAudioService);
    expect(service).toBeTruthy();
  });
});
