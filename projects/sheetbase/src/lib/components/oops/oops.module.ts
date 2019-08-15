import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopsComponent } from './oops.component';

@NgModule({
  declarations: [
    OopsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OopsComponent,
  ]
})
export class OopsComponentModule { }
