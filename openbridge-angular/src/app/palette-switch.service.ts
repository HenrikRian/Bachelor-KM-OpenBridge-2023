// We import not only "Injectable", but "Inject" too, from @angular/core
import {Inject, Injectable} from '@angular/core';
// We import DOCUMENT from @angular/common. Be careful, because the old import from '@angular/platform-browser' is deprecated.
import {DOCUMENT} from '@angular/common';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaletteSwitchService {
  private styleSheetDomElement: HTMLElement;
  private styles = ['day', 'dusk'];
  private styleId = 0;
  private folder = '/assets/styles/';
  private cssPrefix = 'openbridge-';
  private cssPostfix = '.css';

  constructor(@Inject(DOCUMENT) private document: HTMLDocument) {
    if (environment.disablePalettes) {
      return;
    }
    this.styleSheetDomElement = this.document.createElement('link');
    this.styleSheetDomElement.setAttribute('rel', 'stylesheet');
    this.setStyle(this.styles[this.styleId]);

    document.head.appendChild(this.styleSheetDomElement);
  }

  setStyle(style: string) {
    if (environment.disablePalettes) {
      alert('Palette switch is disabled.');
      return;
    }
    const file = this.folder + this.cssPrefix + style + this.cssPostfix;
    this.styleSheetDomElement.setAttribute('href', file);
  }

  changeToDusk() {
    this.setStyle('dusk');
    this.styleId = 1;
  }

  rotatePalette() {
    this.styleId++;
    if (this.styleId >= this.styles.length) {
      this.styleId = 0;
    }
    this.setStyle(this.styles[this.styleId]);
  }
}
