import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Notification } from '@sheetbase/models';

import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataNotificationService {

  private sheet = 'notifications';

  constructor(private Database: DatabaseService) {}

  all(cacheTime = 1440) {
    return this.Database.all<Notification>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Notification>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.item<Notification>(this.sheet, finder, useCached, cacheTime, 'clean', segment);
  }

  itemsOriginal(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsOriginal<Notification>(this.sheet, useCached, cacheTime, segment);
  }

  itemsByLocale(
    locale: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByLocale<Notification>(this.sheet, locale, useCached, cacheTime, segment);
  }

  itemsByOrigin(
    origin: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByOrigin<Notification>(this.sheet, origin, useCached, cacheTime, segment);
  }

  itemsByMetaExists(
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaExists<Notification>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Notification>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Notification) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
