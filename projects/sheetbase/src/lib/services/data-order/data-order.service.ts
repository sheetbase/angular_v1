import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Order } from '@sheetbase/models';

import { AppService } from '../app/app.service';
import { ApiService } from '../api/api.service';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataOrderService {

  private sheet = 'orders';

  constructor(
    private App: AppService,
    private Api: ApiService,
    private Database: DatabaseService,
  ) {}

  items(
    filter?: Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Order>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.item<Order>(this.sheet, finder, useCached, cacheTime, 'clean', segment);
  }

  itemsDraft(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsDraft<Order>(this.sheet, useCached, cacheTime, segment);
  }

  itemsPublished(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsPublished<Order>(this.sheet, useCached, cacheTime, segment);
  }

  itemsArchived(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsArchived<Order>(this.sheet, useCached, cacheTime, segment);
  }

  itemsStageNew(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.itemsByStage('new', useCached, cacheTime, segment);
  }

  itemsStageConfirmed(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.itemsByStage('confirmed', useCached, cacheTime, segment);
  }

  itemsStageDelivering(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.itemsByStage('delivering', useCached, cacheTime, segment);
  }

  itemsStageDone(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.itemsByStage('done', useCached, cacheTime, segment);
  }

  itemsStageCancelled(
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.itemsByStage('cancelled', useCached, cacheTime, segment);
  }

  itemsByType(
    type: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByType<Order>(this.sheet, type, useCached, cacheTime, segment);
  }

  itemsByStage(
    stage: 'new' | 'confirmed' | 'delivering' | 'done' | 'cancelled',
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.items<Order>(
      this.sheet,
      (item: Order) => (
        !!item.stage &&
        item.stage === stage
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
    return this.Database.items<Order>(
      this.sheet,
      (item: Order) => (
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
    return this.Database.items<Order>(
      this.sheet,
      (item: Order) => (
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
    return this.Database.itemsByMetaExists<Order>(this.sheet, metaKey, useCached, cacheTime, segment);
  }

  itemsByMetaEquals(
    metaKey: string,
    equalTo: string,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.itemsByMetaEquals<Order>(this.sheet, metaKey, equalTo, useCached, cacheTime, segment);
  }

  add(item: Order) {
    return this.Database.add(this.sheet, null, item);
  }

  addExtra(item: Order, endpoint = '/app/order') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      order: item,
    });
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Order) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
