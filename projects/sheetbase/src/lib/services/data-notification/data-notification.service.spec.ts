import { TestBed } from '@angular/core/testing';

import { DataNotificationService } from './data-notification.service';

describe('DataNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataNotificationService = TestBed.get(DataNotificationService);
    expect(service).toBeTruthy();
  });
});
