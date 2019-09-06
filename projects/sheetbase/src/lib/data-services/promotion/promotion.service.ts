import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Promotion } from '@sheetbase/models';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private sheet = 'promotions';

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

  itemsOriginal(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsOriginal<Promotion>(this.sheet, useCached, cacheTime, segment);
  }

  itemsKindAuto(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Promotion>(
      this.sheet,
      (item: Promotion) => (
        !item.kind ||
        item.kind === 'auto'
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsKindCode(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Promotion>(
      this.sheet,
      (item: Promotion) => (
        !!item.kind &&
        item.kind === 'code'
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsKindCustom(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Promotion>(
      this.sheet,
      (item: Promotion) => (
        !!item.kind &&
        item.kind === 'custom'
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsByLocale(
    locale: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByLocale<Promotion>(this.sheet, locale, useCached, cacheTime, segment);
  }

  itemsByOrigin(
    origin: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByOrigin<Promotion>(this.sheet, origin, useCached, cacheTime, segment);
  }

  itemsByMetaExists(
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaExists<Promotion>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Promotion>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Promotion) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
