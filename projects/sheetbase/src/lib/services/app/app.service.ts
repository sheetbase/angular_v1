import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  options: {[name: string]: any} = {};

  width = 0;
  height = 0;
  host = '';

  constructor() {
    this.setDemension();
    this.setHost();
  }

  setOptions<AppOptions>(options: AppOptions): AppService {
    this.options = options;
    return this;
  }

  setProps(props: {[name: string]: any}): AppService {
    if (!!props) {
      for (const name of Object.keys(props)) {
        this[name] = props[name];
      }
    }
    return this;
  }

  private setDemension() {
    const setViewport = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    };
    window.addEventListener('resize', setViewport);
    setViewport();
  }

  private setHost() {
    const baseHref = ((document.getElementsByTagName('base')[0] || {})['href'] || '').slice(0, -1);
    if (!!baseHref) {
      this.host = baseHref;
    } else {
      const hrefSplit = window.location.href.split('/').filter(Boolean);
      this.host = hrefSplit[0] + '//' + hrefSplit[1];
    }
  }

}
