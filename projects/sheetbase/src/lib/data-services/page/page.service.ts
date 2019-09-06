import { Injectable } from '@angular/core';

import { Page } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private sheet = 'pages';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Page>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Page>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Page>(this.sheet, finder, options);
  }

  itemsOriginal(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsOriginal<Page>(this.sheet, options);
  }

  itemsDraft(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsDraft<Page>(this.sheet, options);
  }

  itemsPublished(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsPublished<Page>(this.sheet, options);
  }

  itemsArchived(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsArchived<Page>(this.sheet, options);
  }

  itemsByType(type: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByType<Page>(this.sheet, type, options);
  }

  itemsByTypeDefault(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTypeDefault<Page>(this.sheet, options);
  }

  itemsByLocale(locale: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByLocale<Page>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByOrigin<Page>(this.sheet, origin, options);
  }

  itemsByMetaExists(metaKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaExists<Page>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaEquals<Page>(this.sheet, metaKey, equalTo, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
