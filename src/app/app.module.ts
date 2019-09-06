import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {
  AppService,
  NavService,
  CurrencyService,
  DateService,
  NotifyService,
  CartService,
  PlayerService,

  SheetbaseService,
  LocalstorageService,
  CacheService,
  FetchService,
  ApiService,
  DatabaseService,
  AuthService,
  MailService,
  StorageService,

  CategoryService,
  TagService,
  PageService,
  PostService,
  AuthorService,
  ThreadService,
  UserService,
  OptionService,
  BundleService,
  AudioService,
  VideoService,
  ProductService,
  OrderService,
  PropertyService,
  NotificationService,
  PromotionService,
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
    CurrencyService,
    DateService,
    NotifyService,
    CartService,
    PlayerService,

    SheetbaseService,
    LocalstorageService,
    CacheService,
    FetchService,
    ApiService,
    DatabaseService,
    AuthService,
    MailService,
    StorageService,

    CategoryService,
    TagService,
    PageService,
    PostService,
    AuthorService,
    ThreadService,
    UserService,
    OptionService,
    BundleService,
    AudioService,
    VideoService,
    ProductService,
    OrderService,
    PropertyService,
    NotificationService,
    PromotionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
