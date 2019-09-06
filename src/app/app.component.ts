import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { initializeApp } from '@sheetbase/client/app';
import '@sheetbase/client/database';
import '@sheetbase/client/auth';
import '@sheetbase/client/mail';
import '@sheetbase/client/storage';

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

    // sheetbase
    this.sheetbaseService.setApp(
      initializeApp({
        // backend
        backendUrl: 'https://script.google.com/macros/s/AKfycbxaiKoJp0w1-0RFoGGFG2CA0XRrunSXjiH5FZDWGUsFSfFWcdlEH9szDIsxOXUC6YsJAw/exec',
        apiKey: 'RU2h6FREPlzoZo2Itha28uG5toGAk78U',
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
        databaseId: '11Owi30p-FHIMH7Z44LUmA0KYiYCkMdUGBS_iApBf_rg',
      }),
    );

    // nav
    this.navService.setRouter(this.router);

  }

}
