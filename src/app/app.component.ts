import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { initializeApp } from '@sheetbase/client/app';
import '@sheetbase/client/database';
import '@sheetbase/client/auth';

import { SheetbaseService, NavService } from 'sheetbase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private sheetbaseService: SheetbaseService,
    private navService: NavService,
  ) {

    // sheetbase app
    const sheetbaseApp = initializeApp({
      // backend
      backendUrl: 'https://script.google.com/macros/s/AKfycbzOWB29HowmRo76GWM6feByuwlWfZnGTlR2V2cdw27G7dVIesXON4eSHDm4slmt2GRK/exec',
      apiKey: '9fF1UxGBqbKgocpT81k6y53UGmmDOPAG',
      // auth
      authProviders: {
        'google.com': {
          clientId: '719937802037-cdu8pf3n6bk0q0jisappedclh01atgq4.apps.googleusercontent.com'
        },
        'facebook.com': {
          clientId: '276545556215548'
        }
      },
      // database
      databaseId: '1PrLMrZwOsvOmPLcqUuJA9tjki2ChhRsvEu4rkYKrrwU',
      databaseGids: {
        categories: '101',
        tags: '102',
        pages: '103',
        posts: '104',
        audios: '114',
        videos: '115',
        bundles: '116',
        products: '107',
        authors: '117'
      },
    });

    // init app
    this.sheetbaseService.setApp(sheetbaseApp);

    // init nav
    this.navService.setRouter(this.router);

  }

}
