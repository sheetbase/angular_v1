import { Injectable } from '@angular/core';

import { Tag } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private sheet = 'tags';

  constructor(
    private Database: DatabaseService,
  ) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Tag>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Tag>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Tag>(this.sheet, finder, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
