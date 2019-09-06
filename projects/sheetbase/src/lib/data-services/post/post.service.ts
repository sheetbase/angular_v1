import { Injectable } from '@angular/core';

import { Post } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private sheet = 'posts';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Post>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Post>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Post>(this.sheet, finder, options);
  }

  itemsOriginal(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsOriginal<Post>(this.sheet, options);
  }

  itemsDraft(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsDraft<Post>(this.sheet, options);
  }

  itemsPublished(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsPublished<Post>(this.sheet, options);
  }

  itemsArchived(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsArchived<Post>(this.sheet, options);
  }

  itemsByRelated(baseItem: Post, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByRelated<Post>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByType<Post>(this.sheet, type, options);
  }

  itemsByTypeDefault(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTypeDefault<Post>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByAuthor<Post>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByLocale<Post>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByOrigin<Post>(this.sheet, origin, options);
  }

  itemsByParent(parentKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByParent<Post>(this.sheet, parentKey, options);
  }

  itemsByCategory(categoryKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByCategory<Post>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTag<Post>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByKeyword<Post>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaExists<Post>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaEquals<Post>(this.sheet, metaKey, equalTo, options);
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
