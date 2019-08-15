import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Category } from '@sheetbase/models';

import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataCategoryService {

  private sheet = 'categories';

  constructor(private Database: DatabaseService) {}

  all(cacheTime = 1440) {
    return this.Database.all<Category>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Category>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.item<Category>(this.sheet, finder, useCached, cacheTime, 'clean', segment);
  }

  itemsOriginal(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsOriginal<Category>(this.sheet, useCached, cacheTime, segment);
  }

  itemsByLocale(
    locale: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByLocale<Category>(this.sheet, locale, useCached, cacheTime, segment);
  }

  itemsByOrigin(
    origin: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByOrigin<Category>(this.sheet, origin, useCached, cacheTime, segment);
  }

  itemsByContent(
    contentType: string,
    subType: string = '*',
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.items(
      (category: Category) => (
        !category.only ||
        category.only.indexOf(contentType + ':*') > -1 ||
        category.only.indexOf(contentType + ':' + subType) > -1
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsByMetaExists(
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaExists<Category>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Category>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Category) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
