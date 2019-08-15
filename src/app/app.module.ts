import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {
  AppService,
  NavService,
  NotificationService,
  CurrencyService,
  DateService,

  SheetbaseService,
  ApiService,
  FetchService,
  LocalstorageService,
  CacheService,
  DatabaseService,
  AuthService,
  MailService,
  StorageService,

  DataCategoryService,
  DataTagService,
  DataAuthorService,
  DataPageService,
  DataPostService,
  DataThreadService,
  DataUserService,
  DataProductService,
  DataOrderService,
  DataNotificationService,
  DataPromotionService,
  DataAudioService,
  DataVideoService,
  DataBundleService,
  DataOptionService,

  SafePipeModule,
} from 'sheetbase';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    NavService,
    NotificationService,
    CurrencyService,
    DateService,

    SheetbaseService,
    ApiService,
    FetchService,
    LocalstorageService,
    CacheService,
    DatabaseService,
    AuthService,
    MailService,
    StorageService,

    DataCategoryService,
    DataTagService,
    DataAuthorService,
    DataPageService,
    DataPostService,
    DataThreadService,
    DataUserService,
    DataProductService,
    DataOrderService,
    DataNotificationService,
    DataPromotionService,
    DataAudioService,
    DataVideoService,
    DataBundleService,
    DataOptionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
