import { TestBed } from '@angular/core/testing';

import { MailService } from './mail.service';
import { AppService } from './app.service';

const fakeApp = {};

describe('MailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: AppService,
        useValue: { app: fakeApp }
      }
    ]
  }));

  it('should be created', () => {
    const service: MailService = TestBed.get(MailService);
    expect(service).toBeTruthy();
  });
});
