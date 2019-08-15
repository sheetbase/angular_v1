import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { FetchMeta } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private Sheetbase: SheetbaseService) {}

  fetch<Data>(input: RequestInfo, init?: RequestInit, meta: FetchMeta = {}) {
    return from(this.Sheetbase.fetch().fetch<Data>(input, init, meta));
  }

  get<Data>(url: string, init?: RequestInit, meta: FetchMeta = {}) {
    return from(this.Sheetbase.fetch().get<Data>(url, init, meta));
  }

  post<Data>(url: string, init?: RequestInit, meta: FetchMeta = {}) {
    return from(this.Sheetbase.fetch().post<Data>(url, init, meta));
  }

  put<Data>(url: string, init?: RequestInit, meta: FetchMeta = {}) {
    return from(this.Sheetbase.fetch().put<Data>(url, init, meta));
  }

  patch<Data>(url: string, init?: RequestInit, meta: FetchMeta = {}) {
    return from(this.Sheetbase.fetch().patch<Data>(url, init, meta));
  }

  delete<Data>(url: string, init?: RequestInit, meta: FetchMeta = {}) {
    return from(this.Sheetbase.fetch().delete<Data>(url, init, meta));
  }

}
