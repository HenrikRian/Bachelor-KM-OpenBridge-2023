import {TestBed} from '@angular/core/testing';

import {PaletteSwitchService} from './palette-switch.service';

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

describe('PaletteSwitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

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
    const service: PaletteSwitchService = new PaletteSwitchService(htmlDocument);
    const e = htmlDocument.head.styleDocument;
    const stylesheet = 'openbridge-day';
    checkStyleSheet(e, stylesheet);
  });

  it('should change to dusk on call', () => {
    const htmlDocument = new MockHtmlDocument();
    // @ts-ignore
    const service: PaletteSwitchService = new PaletteSwitchService(htmlDocument);
    service.changeToDusk();
    const e = htmlDocument.head.styleDocument;
    const stylesheet = 'openbridge-dusk';
    checkStyleSheet(e, stylesheet);

  });

  it('should rotate palettes on call', () => {
    const htmlDocument = new MockHtmlDocument();
    // @ts-ignore
    const service: PaletteSwitchService = new PaletteSwitchService(htmlDocument);
    const e = htmlDocument.head.styleDocument;
    checkStyleSheet(e, 'openbridge-day');
    service.rotatePalette();
    checkStyleSheet(e, 'openbridge-dusk');
    service.rotatePalette();
    checkStyleSheet(e, 'openbridge-day');
    service.rotatePalette();
    checkStyleSheet(e, 'openbridge-dusk');

  });
});
