import { Injectable } from '@angular/core';

import { Filter, DocsContentStyles, DataSegment } from '@sheetbase/client';
import { Author } from '@sheetbase/models';

import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataAuthorService {

  private sheet = 'authors';

  constructor(private Database: DatabaseService) {}

  all(cacheTime = 1440) {
    return this.Database.all<Author>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Author>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    docsStyles: DocsContentStyles = 'full',
    segment: DataSegment = null,
  ) {
    return this.Database.item<Author>(this.sheet, finder, useCached, cacheTime, docsStyles, segment);
  }

  itemsOriginal(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsOriginal<Author>(this.sheet, useCached, cacheTime, segment);
  }

  itemsDraft(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsDraft<Author>(this.sheet, useCached, cacheTime, segment);
  }

  itemsPublished(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsPublished<Author>(this.sheet, useCached, cacheTime, segment);
  }

  itemsArchived(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsArchived<Author>(this.sheet, useCached, cacheTime, segment);
  }

  itemsByType(
    type: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByType<Author>(this.sheet, type, useCached, cacheTime, segment);
  }

  itemsByAuthor(
    authorKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByAuthor<Author>(this.sheet, authorKey, useCached, cacheTime, segment);
  }

  itemsByLocale(
    locale: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByLocale<Author>(this.sheet, locale, useCached, cacheTime, segment);
  }

  itemsByOrigin(
    origin: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByOrigin<Author>(this.sheet, origin, useCached, cacheTime, segment);
  }

  itemsByParent(
    parentKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByParent<Author>(this.sheet, parentKey, useCached, cacheTime, segment);
  }

  itemsByCategory(
    categoryKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByCategory<Author>(this.sheet, categoryKey, useCached, cacheTime, segment);
  }

  itemsByTag(
    tagKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByTag<Author>(this.sheet, tagKey, useCached, cacheTime, segment);
  }

  itemsByKeyword(
    keyword: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByKeyword<Author>(this.sheet, keyword, useCached, cacheTime, segment);
  }

  itemsByMetaExists(
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaExists<Author>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Author>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
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

  share(key: string, providers: string[] = []) {
    return this.Database.share(this.sheet, key, providers);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Author) {
    return this.Database.clearCachedItem(this.sheet, item);
  }
}
