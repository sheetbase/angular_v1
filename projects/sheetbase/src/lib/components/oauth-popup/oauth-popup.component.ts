import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sheetbase-oauth-popup',
  templateUrl: './oauth-popup.component.html',
  styleUrls: ['./oauth-popup.component.scss']
})
export class OauthPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.opener !== null && !window.opener.closed) {
      // process result
      window.opener.handleOauthResult(window.location.hash);
    }
    // close popup
    window.close();
  }

}
