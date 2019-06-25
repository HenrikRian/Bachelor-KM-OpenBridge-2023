import { async, ComponentFixture, TestBed } from '@angular/core/testing';
const quixote = require('quixote');

import { TopBarComponent } from './top-bar.component';
import * as assert from 'assert';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TopBarStyle', () => {

  let frame;
  let container;
  let button;

  beforeAll((done) => {
    frame = quixote.createFrame({
      stylesheet: 'base/assets/styles/openbridge-day.css'
    }, done);
  });

  afterAll(() => {
    frame.remove();
  });

  beforeEach(() =>  {
    frame.reset();
    container = frame.add(
      '<div>' +
      '  <a id=\'button\' class=\'button\' href=\'#anything\'>foo</a>' +
      '</div>'
    );
    button = frame.get('#button');
  });

  it('fills its container', () =>  {
    button.assert({
      width: container.width
    });
  });

  it('has styled text', () => {
    assert.equal(button.getRawStyle('text-align'), 'left', 'should be centered');
    assert.equal(button.getRawStyle('text-decoration'), 'none', 'should not be underlined');
    assert.equal(button.getRawStyle('text-transform'), 'uppercase', 'should be uppercase');
  });

});
