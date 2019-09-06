import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { UserProfile } from '@sheetbase/models';

import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Api: ApiService) {}

  profiles(uids: string[], cacheTime = 1440): Observable<{[uid: string]: UserProfile}> {
    return from(this.Api.get('/auth/public', { uids: uids.join(',') }, cacheTime));
  }

  profile(uid: string, cacheTime = 1440): Observable<UserProfile> {
    return from(this.Api.get('/auth/public', { uid }, cacheTime));
  }

}
