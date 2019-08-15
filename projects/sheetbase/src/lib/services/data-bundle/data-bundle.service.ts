import { Injectable } from '@angular/core';

import { Filter, DocsContentStyles, DataSegment } from '@sheetbase/client';
import { Bundle } from '@sheetbase/models';

import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataBundleService {

  private sheet = 'bundles';

  constructor(private Database: DatabaseService) {}

  all(cacheTime = 1440) {
    return this.Database.all<Bundle>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Bundle>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    docsStyles: DocsContentStyles = 'full',
    segment: DataSegment = null,
  ) {
    return this.Database.item<Bundle>(this.sheet, finder, useCached, cacheTime, docsStyles, segment);
  }

  itemsOriginal(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsOriginal<Bundle>(this.sheet, useCached, cacheTime, segment);
  }

  itemsDraft(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsDraft<Bundle>(this.sheet, useCached, cacheTime, segment);
  }

  itemsPublished(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsPublished<Bundle>(this.sheet, useCached, cacheTime, segment);
  }

  itemsArchived(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsArchived<Bundle>(this.sheet, useCached, cacheTime, segment);
  }

  itemsByType(
    type: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByType<Bundle>(this.sheet, type, useCached, cacheTime, segment);
  }

  itemsByAuthor(
    authorKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByAuthor<Bundle>(this.sheet, authorKey, useCached, cacheTime, segment);
  }

  itemsByLocale(
    locale: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByLocale<Bundle>(this.sheet, locale, useCached, cacheTime, segment);
  }

  itemsByOrigin(
    origin: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByOrigin<Bundle>(this.sheet, origin, useCached, cacheTime, segment);
  }

  itemsByParent(
    parentKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByParent<Bundle>(this.sheet, parentKey, useCached, cacheTime, segment);
  }

  itemsByCategory(
    categoryKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByCategory<Bundle>(this.sheet, categoryKey, useCached, cacheTime, segment);
  }

  itemsByTag(
    tagKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByTag<Bundle>(this.sheet, tagKey, useCached, cacheTime, segment);
  }

  itemsByKeyword(
    keyword: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByKeyword<Bundle>(this.sheet, keyword, useCached, cacheTime, segment);
  }

  itemsByMetaExists(
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaExists<Bundle>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Bundle>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
  }

  updateView(key: string) {
    return this.Database.updateView(this.sheet, key);
  }

  updateLike(key: string) {
    return this.Database.updateLike(this.sheet, key);
  }

  updateComment(key: string) {
    return this.Database.updateComment(this.sheet, key);
  }

  rate(key: string, stars: number) {
    return this.Database.rate(this.sheet, key, stars);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Bundle) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
