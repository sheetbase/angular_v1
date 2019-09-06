import { Injectable } from '@angular/core';

import { Author } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private sheet = 'authors';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Author>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Author>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Author>(this.sheet, finder, options);
  }

  itemsOriginal(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsOriginal<Author>(this.sheet, options);
  }

  itemsDraft(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsDraft<Author>(this.sheet, options);
  }

  itemsPublished(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsPublished<Author>(this.sheet, options);
  }

  itemsArchived(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsArchived<Author>(this.sheet, options);
  }

  itemsByRelated(baseItem: Author, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByRelated<Author>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByType<Author>(this.sheet, type, options);
  }

  itemsByTypeDefault(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTypeDefault<Author>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByAuthor<Author>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByLocale<Author>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByOrigin<Author>(this.sheet, origin, options);
  }

  itemsByParent(parentKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByParent<Author>(this.sheet, parentKey, options);
  }

  itemsByCategory(categoryKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByCategory<Author>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTag<Author>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByKeyword<Author>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaExists<Author>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaEquals<Author>(this.sheet, metaKey, equalTo, options);
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
