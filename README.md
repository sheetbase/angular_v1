# Sheetbase Angular

Sheetbase wrapper for Angular apps

<!-- <block:header> -->

[![Build Status](https://travis-ci.com/sheetbase/angular.svg?branch=master)](https://travis-ci.com/sheetbase/angular) [![Coverage Status](https://coveralls.io/repos/github/sheetbase/angular/badge.svg?branch=master)](https://coveralls.io/github/sheetbase/angular?branch=master) [![License][license_badge]][license_url] [![Support me on Patreon][badge_patreon]][patreon_url] [![PayPal][badge_paypal_donate]][paypal_donate_url] [![Ask me anything][badge_ask_me]][ask_me_url]

<!-- </block:header> -->

## Getting started

Install: `npm install --save @sheetbase/client @sheetbase/angular`

```ts
import { initializeApp } from '@sheetbase/client/app';
import { SheetbaseService } from '@sheetbase/angular';

// create a Sheetbase app
const sheetbaseApp = initializeApp(/* options */);

// init the Sheetbase service
this.sheetbaseService.setApp(sheetbaseApp);

// using
const result = await this.sheetbaseService.api().get('/');
```

## Services

### App

- `AppService`: app stuffs
- `NavService`: navigation
- `CurrencyService`: format and convert currency
- `DateService`: format date time
- `NotifyService`: local notification
- `CartService`: shopping cart
- `PlayerService`: media player

### Sheetbase

- `SheetbaseService`: wrapper of Sheetbase app
- `LocalstorageService`: wrapper of app.localstorage()
- `CacheService`: wrapper of app.cache()
- `FetchService`: wrapper of app.fetch()
- `ApiService`: wrapper of app.api()
- `DatabaseService`: wrapper of app.database()
- `AuthService`: wrapper of app.auth()
- `MailService`: wrapper of app.mail()
- `StorageService`: wrapper of app.storage()

### Data (convinient database services)

- `CategoryService`: for model `Category`
- `TagService`: for model `Tag`
- `PageService`: for model `Page`
- `PostService`: for model `Post`
- `AuthorService`: for model `Author`
- `ThreadService`: for model `Thread`
- `UserService`: for model `User`
- `OptionService`: for model `Option`
- `BundleService`: for model `Bundle`
- `AudioService`: for model `Audio`
- `VideoService`: for model `Video`
- `ProductService`: for model `Product`
- `OrderService`: for model `Order`
- `PropertyService`: for model `Property`
- `NotificationService`: for model `Notification`
- `PromotionService`: for model `Promotion`

## Components

- `sheetbase-oauth-popup`: oauth popup handler

## Pipes

- `filter`: list filter
- `o2a`: turns object into array
- `safe`: safe html binding or url
- `currencyx`: format currency based-on app config
- `datex`: format date based-on app config
- `ago`: display relative datetime
- `lis`: turns linking value into an array

## Utils

- `retryInterval`: retry an action until the condition is matched or timeout.
- `o2a`: turns object into array
- `filter`: list filter

## Lisence

Sheetbase Angular is released under the [MIT](https://github.com/sheetbase/angular/blob/master/LICENSE) license.

<!-- <block:footer> -->

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/angular/blob/master/LICENSE
[badge_patreon]: https://lamnhan.github.io/assets/images/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan
[badge_paypal_donate]: https://lamnhan.github.io/assets/images/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan
[badge_ask_me]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase

<!-- </block:footer> -->