import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalSeoService {

  constructor(@Inject(DOCUMENT) private doc:any) { }

  createLinkForCanonicalURL(url?:string) {
    const canURL = url == undefined ? this.doc.URL : url;
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', canURL);
  }
}
