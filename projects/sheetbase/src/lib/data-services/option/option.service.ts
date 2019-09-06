import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Promotion } from '@sheetbase/models';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private sheet = 'options';

  constructor(private Database: DatabaseService) {}

  all(cacheTime = 1440) {
    return this.Database.all<Promotion>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Promotion>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.item<Promotion>(this.sheet, finder, useCached, cacheTime, 'clean', segment);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Promotion) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
