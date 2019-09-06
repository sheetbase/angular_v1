import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { AppService } from './app.service';

const fakeApp = {};

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: AppService,
        useValue: { app: fakeApp }
      }
    ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
