import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { FetchMethodOptions } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private Sheetbase: SheetbaseService) {}

  fetch<Data>(input: RequestInfo, init?: RequestInit, options: FetchMethodOptions = {}) {
    return from(this.Sheetbase.fetch().fetch<Data>(input, init, options));
  }

  get<Data>(url: string, init?: RequestInit, options: FetchMethodOptions = {}) {
    return from(this.Sheetbase.fetch().get<Data>(url, init, options));
  }

  post<Data>(url: string, init?: RequestInit, options: FetchMethodOptions = {}) {
    return from(this.Sheetbase.fetch().post<Data>(url, init, options));
  }

  put<Data>(url: string, init?: RequestInit, options: FetchMethodOptions = {}) {
    return from(this.Sheetbase.fetch().put<Data>(url, init, options));
  }

  patch<Data>(url: string, init?: RequestInit, options: FetchMethodOptions = {}) {
    return from(this.Sheetbase.fetch().patch<Data>(url, init, options));
  }

  delete<Data>(url: string, init?: RequestInit, options: FetchMethodOptions = {}) {
    return from(this.Sheetbase.fetch().delete<Data>(url, init, options));
  }

}
