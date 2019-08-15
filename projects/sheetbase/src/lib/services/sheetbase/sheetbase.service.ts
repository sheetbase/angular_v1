import { Injectable } from '@angular/core';

import { App } from '@sheetbase/client';

@Injectable({
  providedIn: 'root'
})
export class SheetbaseService {

  private app: App;

  constructor() {}

  setApp(app: App): SheetbaseService {
    this.app = app;
    return this;
  }

  api() {
    return this.app.api();
  }

  fetch() {
    return this.app.fetch();
  }

  localstorage() {
    return this.app.localstorage();
  }

  cache() {
    return this.app.cache();
  }

  database() {
    return this.app.database();
  }

  auth() {
    return this.app.auth();
  }

  storage() {
    return this.app.storage();
  }

  mail() {
    return this.app.mail();
  }

}
