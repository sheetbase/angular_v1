import { Injectable } from '@angular/core';

import { Bundle } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  private sheet = 'bundles';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Bundle>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Bundle>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Bundle>(this.sheet, finder, options);
  }

  itemsOriginal(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsOriginal<Bundle>(this.sheet, options);
  }

  itemsDraft(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsDraft<Bundle>(this.sheet, options);
  }

  itemsPublished(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsPublished<Bundle>(this.sheet, options);
  }

  itemsArchived(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsArchived<Bundle>(this.sheet, options);
  }

  itemsByRelated(baseItem: Bundle, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByRelated<Bundle>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByType<Bundle>(this.sheet, type, options);
  }

  itemsByTypeDefault(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTypeDefault<Bundle>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByAuthor<Bundle>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByLocale<Bundle>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByOrigin<Bundle>(this.sheet, origin, options);
  }

  itemsByCategory(categoryKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByCategory<Bundle>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTag<Bundle>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByKeyword<Bundle>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaExists<Bundle>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaEquals<Bundle>(this.sheet, metaKey, equalTo, options);
  }

  viewing(key: string) {
    return this.Database.viewing(this.sheet, key);
  }

  liking(key: string) {
    return this.Database.liking(this.sheet, key);
  }

  commenting(key: string) {
    return this.Database.commenting(this.sheet, key);
  }

  rating(key: string, stars: number) {
    return this.Database.rating(this.sheet, key, stars);
  }

  sharing(key: string, providers: string[] = []) {
    return this.Database.sharing(this.sheet, key, providers);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
