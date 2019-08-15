import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { AppService } from './app.service';

const fakeApp = {};

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: AppService,
        useValue: { app: fakeApp }
      }
    ]
  }));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
});
