import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { FileResource } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private Sheetbase: SheetbaseService) {}

  info(fileId: string) {
    return from(this.Sheetbase.storage().info(fileId));
  }

  upload(fileResource: FileResource, customFolder?: string, rename?: string) {
    return from(this.Sheetbase.storage().upload(fileResource, customFolder, rename));
  }

  load(file: File) {
    return from(this.Sheetbase.storage().load(file));
  }

}
