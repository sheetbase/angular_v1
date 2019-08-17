import { Injectable } from '@angular/core';

import { Filter, DataSegment } from '@sheetbase/client';
import { Property } from '@sheetbase/models';

import { AppService } from '../app/app.service';
import { ApiService } from '../api/api.service';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class DataPropertyService {

  private sheet = 'properties';

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
    return this.Database.items<Property>(this.sheet, filter, useCached, cacheTime, segment);
  }

  item(
    finder: string | Filter,
    useCached = true,
    cacheTime = 1440,
    segment: DataSegment = null,
  ) {
    return this.Database.item<Property>(this.sheet, finder, useCached, cacheTime, 'clean', segment);
  }

  add(item: Property) {
    return this.Database.add(this.sheet, null, item);
  }

  update(key: string, data: Property) {
    return this.Database.update(this.sheet, null, data);
  }

  addExtra(item: Property, endpoint = '/app/property') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      property: item,
    });
  }

  clearCachedAll() {
    return this.Database.clearCachedAll(this.sheet);
  }

  clearCachedItem(item: Property) {
    return this.Database.clearCachedItem(this.sheet, item);
  }

}
