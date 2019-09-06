import { Injectable } from '@angular/core';

import { Category } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private sheet = 'categories';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Category>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Category>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Category>(this.sheet, finder, options);
  }

  itemsOriginal(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsOriginal<Category>(this.sheet, options);
  }

  itemsByLocale(locale: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByLocale<Category>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByOrigin<Category>(this.sheet, origin, options);
  }

  itemsByContent(
    contentType: string,
    subType: string = '*',
    options: DatabaseMethodOptions = {},
  ) {
    return this.items(
      (category: Category) => (
        !category.only ||
        category.only.indexOf(contentType + ':*') > -1 ||
        category.only.indexOf(contentType + ':' + subType) > -1
      ),
      options,
    );
  }

  itemsByMetaExists(metaKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaExists<Category>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaEquals<Category>(this.sheet, metaKey, equalTo, options);
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.Database.clearCachedItem(this.sheet, key);
  }

}
