import { Injectable } from '@angular/core';

import { Product } from '@sheetbase/models';
import { Filter, DatabaseMethodOptions } from '@sheetbase/client';

import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private sheet = 'products';

  constructor(private Database: DatabaseService) {}

  all(options: DatabaseMethodOptions = {}) {
    return this.Database.all<Product>(this.sheet, options);
  }

  items(filter?: Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.items<Product>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options: DatabaseMethodOptions = {}) {
    return this.Database.item<Product>(this.sheet, finder, options);
  }

  itemsOriginal(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsOriginal<Product>(this.sheet, options);
  }

  itemsDraft(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsDraft<Product>(this.sheet, options);
  }

  itemsPublished(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsPublished<Product>(this.sheet, options);
  }

  itemsArchived(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsArchived<Product>(this.sheet, options);
  }

  itemsByRelated(baseItem: Product, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByRelated<Product>(this.sheet, baseItem, options);
  }

  itemsByType(type: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByType<Product>(this.sheet, type, options);
  }

  itemsByTypeDefault(options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTypeDefault<Product>(this.sheet, options);
  }

  itemsByAuthor(authorKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByAuthor<Product>(this.sheet, authorKey, options);
  }

  itemsByLocale(locale: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByLocale<Product>(this.sheet, locale, options);
  }

  itemsByOrigin(origin: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByOrigin<Product>(this.sheet, origin, options);
  }

  itemsByParent(parentKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByParent<Product>(this.sheet, parentKey, options);
  }

  itemsByCategory(categoryKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByCategory<Product>(this.sheet, categoryKey, options);
  }

  itemsByTag(tagKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByTag<Product>(this.sheet, tagKey, options);
  }

  itemsByKeyword(keyword: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByKeyword<Product>(this.sheet, keyword, options);
  }

  itemsByMetaExists(metaKey: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaExists<Product>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options: DatabaseMethodOptions = {}) {
    return this.Database.itemsByMetaEquals<Product>(this.sheet, metaKey, equalTo, options);
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
