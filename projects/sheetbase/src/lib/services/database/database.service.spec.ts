import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { AppService } from './app.service';

const fakeApp = {};

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: AppService,
        useValue: { app: fakeApp }
      }
    ]
  }));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });
});
