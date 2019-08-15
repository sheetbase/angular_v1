import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Thread } from '@sheetbase/models';

import { AppService } from '../app/app.service';
import { ApiService } from '../api/api.service';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataThreadService {

  private sheet = 'threads';

  constructor(
    private App: AppService,
    private Api: ApiService,
    private Database: DatabaseService,
  ) {}

  all(cacheTime = 1440) {
    return this.Database.all<Thread>(this.sheet, cacheTime);
  }

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Thread>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.item<Thread>(this.sheet, finder, useCached, cacheTime, 'clean', segment);
  }

  itemsDraft(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsDraft<Thread>(this.sheet, useCached, cacheTime, segment);
  }

  itemsPublished(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsPublished<Thread>(this.sheet, useCached, cacheTime, segment);
  }

  itemsArchived(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsArchived<Thread>(this.sheet, useCached, cacheTime, segment);
  }

  itemsTopLevel(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Thread>(
      this.sheet,
      (item: Thread) => !item.parent,
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsStandalone(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Thread>(
      this.sheet,
      (item: Thread) => !item.master,
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsByType(
    type: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByType<Thread>(this.sheet, type, useCached, cacheTime, segment);
  }

  itemsByMaster(
    contentType: string,
    masterKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Thread>(
      this.sheet,
      (item: Thread) => (
        !!item.master &&
        item.master === `${contentType}:${masterKey}`
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsByThread(
    threadKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Thread>(
      this.sheet,
      (item: Thread) => (
        !!item.parent &&
        item.parent === threadKey
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsByUid(
    uid: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Thread>(
      this.sheet,
      (item: Thread) => (
        !!item.uid &&
        item.uid === uid
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsByEmail(
    email: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Thread>(
      this.sheet,
      (item: Thread) => (
        !!item.email &&
        item.email === email
      ),
      useCached,
      cacheTime,
      segment,
    );
  }

  itemsByMetaExists(
    metaKey: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaExists<Thread>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Thread>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
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

  add(item: Thread) {
    return this.Database.add(this.sheet, null, item);
  }

  addExtra(item: Thread, endpoint = '/app/thread') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      thread: item,
    });
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Thread) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
