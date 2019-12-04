import {TestBed} from '@angular/core/testing';

import {PaletteSwitchService} from './palette-switch.service';
import {Location, LocationStrategy} from '@angular/common';
import {MockLocationStrategy} from '@angular/common/testing';

class MockHtmlElement {
  attributes: Map<string, string> = new Map();
  tag: string;

  constructor(tag: string) {
    this.tag = tag;
  }

  setAttribute(qualifiedName: string, value: string) {
    this.attributes.set(qualifiedName, value);
  }

}

class MockHtmlDocument {
  head = {
    styleDocument: undefined,
    appendChild(newChild: MockHtmlElement) {
      this.styleDocument = newChild;
    }
  };

  createElement(tagName: string): MockHtmlElement {
    return new MockHtmlElement(tagName);
  }
}

class MockLocation {
  public prepareExternalUrl(url: string): string {
    return url;
  }
}

describe('PaletteSwitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [Location, {provide: LocationStrategy, useClass: MockLocationStrategy}]
  }));

  it('should be created', () => {
    const service: PaletteSwitchService = TestBed.get(PaletteSwitchService);
    expect(service).toBeTruthy();
  });

  function checkStyleSheet(element: MockHtmlElement, stylesheet: string) {
    expect(element.tag).toBe('link');
    expect(element.attributes.get('rel')).toBe('stylesheet');
    expect(element.attributes.get('href')).toContain(stylesheet);
  }

  it('should inject css on construction', () => {
    const htmlDocument = new MockHtmlDocument();
    // @ts-ignore
    const service: PaletteSwitchService = new PaletteSwitchService(htmlDocument, new MockLocation());
    const e = htmlDocument.head.styleDocument;
    const stylesheet = 'openbridge-bright';
    checkStyleSheet(e, stylesheet);
  });

  it('should change to dusk on call', () => {
    const htmlDocument = new MockHtmlDocument();
    // @ts-ignore
    const service: PaletteSwitchService = new PaletteSwitchService(htmlDocument, new MockLocation());
    service.changeToDusk();
    const e = htmlDocument.head.styleDocument;
    const stylesheet = 'openbridge-dusk';
    checkStyleSheet(e, stylesheet);

  });

  it('should rotate palettes on call', () => {
    const htmlDocument = new MockHtmlDocument();
    // @ts-ignore
    const service: PaletteSwitchService = new PaletteSwitchService(htmlDocument, new MockLocation());
    const e = htmlDocument.head.styleDocument;
    checkStyleSheet(e, 'openbridge-bright');
    service.rotatePalette();
    checkStyleSheet(e, 'openbridge-day');
    service.rotatePalette();
    checkStyleSheet(e, 'openbridge-dusk');
    service.rotatePalette();
    checkStyleSheet(e, 'openbridge-night');
    service.rotatePalette();
    checkStyleSheet(e, 'openbridge-bright');
  });
});
