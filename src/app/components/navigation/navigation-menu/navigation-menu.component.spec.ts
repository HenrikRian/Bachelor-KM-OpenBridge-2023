import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationMenuComponent} from './navigation-menu.component';

const quixote = require('quixote');

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Button Style', () => {

  let frame;
  let container;
  let icon;
  let label;

  beforeAll((done) => {
    frame = quixote.createFrame({
      stylesheet: 'base/assets/styles/openbridge-day.css'
    }, done);
  });

  afterAll(() => {
    frame.remove();
  });

  beforeEach(() => {
    frame.reset();
    container = frame.add(`
<div class="ob-nav-menu">
  <div class="ob-nav-item ob-expandable">
    <span class="ob-icon">
      <i class="material-icons" id="icon">settings</i>
    </span>
    <span class="ob-label" id="label">Selection</span>
    <span class="ob-nav-icon">
      <i class="material-icons">play_arrow</i>
    </span>
  </div>

</div>
  `);
    icon = frame.get('#icon');
    label = frame.get('#label');
  });

  it('icon and label are vertically aligned', () => {
    const centerIcon = (icon.getRawPosition().top + icon.getRawPosition().bottom ) / 2;
    const labelCenter = (label.getRawPosition().top + label.getRawPosition().bottom ) / 2;
    expect(centerIcon).toBeCloseTo(labelCenter);
  });


});
