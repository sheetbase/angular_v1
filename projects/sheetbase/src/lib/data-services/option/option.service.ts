import { Injectable } from '@angular/core';

import { Option } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private sheet = 'options';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Option>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Option>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Option>(this.sheet, finder, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
