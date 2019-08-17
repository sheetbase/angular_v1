import { Injectable } from '@angular/core';

import { Filter, DocsContentStyles, DataSegment } from '@sheetbase/client';
import { Product } from '@sheetbase/models';

import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  private sheet = 'products';

  constructor(private Database: DatabaseService) {}

  all(cacheTime = 1440) {
    return this.Database.all<Product>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Product>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    docsStyles: DocsContentStyles = 'full',
    segment: DataSegment = null,
  ) {
    return this.Database.item<Product>(this.sheet, finder, useCached, cacheTime, docsStyles, segment);
  }

  itemsOriginal(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsOriginal<Product>(this.sheet, useCached, cacheTime, segment);
  }

  itemsDraft(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsDraft<Product>(this.sheet, useCached, cacheTime, segment);
  }

  itemsPublished(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsPublished<Product>(this.sheet, useCached, cacheTime, segment);
  }

  itemsArchived(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsArchived<Product>(this.sheet, useCached, cacheTime, segment);
  }

  itemsByType(
    type: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByType<Product>(this.sheet, type, useCached, cacheTime, segment);
  }

  itemsByAuthor(
    authorKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByAuthor<Product>(this.sheet, authorKey, useCached, cacheTime, segment);
  }

  itemsByLocale(
    locale: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByLocale<Product>(this.sheet, locale, useCached, cacheTime, segment);
  }

  itemsByOrigin(
    origin: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByOrigin<Product>(this.sheet, origin, useCached, cacheTime, segment);
  }

  itemsByParent(
    parentKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByParent<Product>(this.sheet, parentKey, useCached, cacheTime, segment);
  }

  itemsByCategory(
    categoryKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByCategory<Product>(this.sheet, categoryKey, useCached, cacheTime, segment);
  }

  itemsByTag(
    tagKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByTag<Product>(this.sheet, tagKey, useCached, cacheTime, segment);
  }

  itemsByKeyword(
    keyword: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByKeyword<Product>(this.sheet, keyword, useCached, cacheTime, segment);
  }

  itemsByMetaExists(
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaExists<Product>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Product>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
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

  clearCachedItem(item: Product) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
