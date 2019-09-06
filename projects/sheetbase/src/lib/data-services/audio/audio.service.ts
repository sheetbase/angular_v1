import { Injectable } from '@angular/core';

import { Audio } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private sheet = 'audios';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Audio>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Audio>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Audio>(this.sheet, finder, options);
  }

  itemsOriginal(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsOriginal<Audio>(this.sheet, options);
  }

  itemsDraft(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsDraft<Audio>(this.sheet, options);
  }

  itemsPublished(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsPublished<Audio>(this.sheet, options);
  }

  itemsArchived(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsArchived<Audio>(this.sheet, options);
  }

  itemsByType(type: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByType<Audio>(this.sheet, type, options);
  }

  itemsByAuthor(authorKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByAuthor<Audio>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByLocale<Audio>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByOrigin<Audio>(this.sheet, origin, options);
  }

  itemsByParent(parentKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByParent<Audio>(this.sheet, parentKey, options);
  }

  itemsByGenre(genreKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTerm<Audio>(this.sheet, 'genres', genreKey, options);
  }

  itemsByCategory(categoryKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByCategory<Audio>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTag<Audio>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByKeyword<Audio>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaExists<Audio>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaEquals<Audio>(this.sheet, metaKey, equalTo, options);
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

  clearCachedItem(item: Audio) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
