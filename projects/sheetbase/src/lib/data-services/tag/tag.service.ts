import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Tag } from '@sheetbase/models';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private sheet = 'tags';

  constructor(
    private Database: DatabaseService,
  ) {}

  all(cacheTime = 1440) {
    return this.Database.all<Tag>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Tag>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.item<Tag>(this.sheet, finder, useCached, cacheTime, 'clean', segment);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Tag) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
