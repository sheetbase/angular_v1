import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { Filter, DocsContentStyles, DataSegment } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private Sheetbase: SheetbaseService) {}

  setSegmentation(globalSegment: DataSegment) {
    return this.Sheetbase.database().setSegmentation(globalSegment);
  }

  direct() {
    return this.Sheetbase.database().direct();
  }

  /**
   * instances
   */

  server() {
    return this.Sheetbase.database().server();
  }

  all<Item>(sheet: string, cacheTime = 0) {
    return from(this.Sheetbase.database().all<Item>(sheet, cacheTime));
  }

  /**
   * general get
   */

  query<Item>(
    sheet: string,
    filter: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().query<Item>(sheet, filter, useCached, cacheTime, segment));
  }

  items<Item>(
    sheet: string,
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().items<Item>(sheet, filter, useCached, cacheTime, segment));
  }

  item<Item>(
    sheet: string,
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    docsStyle: DocsContentStyles = 'original',
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().item<Item>(sheet, finder, useCached, cacheTime, docsStyle, segment));
  }

  content(
    url: string,
    cacheTime = 1440,
    docsStyle: DocsContentStyles = 'original',
  ) {
    return from(this.Sheetbase.database().content(url, cacheTime, docsStyle));
  }

  /**
   * general set
   */

  set<Data>(sheet: string, key: string, data: Data) {
    return from(this.Sheetbase.database().set(sheet, key, data));
  }

  update<Data>(sheet: string, key: string, data: Data) {
    return from(this.Sheetbase.database().update(sheet, key, data));
  }

  add<Data>(sheet: string, key: string, data: Data) {
    return from(this.Sheetbase.database().add(sheet, key, data));
  }

  remove(sheet: string, key: string) {
    return from(this.Sheetbase.database().remove(sheet, key));
  }

  increase(
    sheet: string,
    key: string,
    increasing: string | string[] | {[path: string]: number},
  ) {
    return from(this.Sheetbase.database().increase(sheet, key, increasing));
  }

  /**
   * manage cache
   */

  clearCachedAll(input: string | string[]) {
    return from(this.Sheetbase.database().clearCachedAll(input));
  }

  clearCachedItem<Item>(sheet: string, item: Item) {
    return from(this.Sheetbase.database().clearCachedItem(sheet, item));
  }

  /**
   * util get
   */

  itemsOriginal<Item>(
    sheet: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsOriginal<Item>(sheet, useCached, cacheTime, segment));
  }

  itemsDraft<Item>(
    sheet: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsDraft<Item>(sheet, useCached, cacheTime, segment));
  }

  itemsPublished<Item>(
    sheet: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsPublished<Item>(sheet, useCached, cacheTime, segment));
  }

  itemsArchived<Item>(
    sheet: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsArchived<Item>(sheet, useCached, cacheTime, segment));
  }

  itemsByRelated<Item>(
    sheet: string,
    baseItem: Item,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByRelated<Item>(sheet, baseItem, useCached, cacheTime, segment));
  }

  itemsByType<Item>(
    sheet: string,
    type: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByType<Item>(sheet, type, useCached, cacheTime, segment));
  }

  itemsByAuthor<Item>(
    sheet: string,
    authorKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByAuthor<Item>(sheet, authorKey, useCached, cacheTime, segment));
  }

  itemsByLocale<Item>(
    sheet: string,
    locale: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByLocale<Item>(sheet, locale, useCached, cacheTime, segment));
  }

  itemsByOrigin<Item>(
    sheet: string,
    origin: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByOrigin<Item>(sheet, origin, useCached, cacheTime, segment));
  }

  itemsByParent<Item>(
    sheet: string,
    parentKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByParent<Item>(sheet, parentKey, useCached, cacheTime, segment));
  }

  itemsByTerm<Item>(
    sheet: string,
    taxonomy: string,
    termKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByTerm<Item>(sheet, taxonomy, termKey, useCached, cacheTime, segment));
  }

  itemsByCategory<Item>(
    sheet: string,
    categoryKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByCategory<Item>(sheet, categoryKey, useCached, cacheTime, segment));
  }

  itemsByTag<Item>(
    sheet: string,
    tagKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByTag<Item>(sheet, tagKey, useCached, cacheTime, segment));
  }

  itemsByKeyword<Item>(
    sheet: string,
    keyword: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByKeyword<Item>(sheet, keyword, useCached, cacheTime, segment));
  }

  itemsByMetaExists<Item>(
    sheet: string,
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByMetaExists<Item>(sheet, metaKey, useCached, cacheTime, segment));
  }

  itemsByMetaEquals<Item>(
    sheet: string,
    metaKey: string,
    equalTo: any,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return from(this.Sheetbase.database().itemsByMetaEquals<Item>(sheet, metaKey, equalTo, useCached, cacheTime, segment));
  }

  /**
   * util set
   */

  updateView(sheet: string, key: string) {
    return from(this.Sheetbase.database().updateView(sheet, key));
  }

  updateLike(sheet: string, key: string) {
    return from(this.Sheetbase.database().updateLike(sheet, key));
  }

  updateComment(sheet: string, key: string) {
    return from(this.Sheetbase.database().updateComment(sheet, key));
  }

  rate(sheet: string, key: string, stars: number) {
    return from(this.Sheetbase.database().rate(sheet, key, stars));
  }

}
