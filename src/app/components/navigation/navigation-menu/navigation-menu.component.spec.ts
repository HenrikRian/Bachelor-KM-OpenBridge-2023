import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationMenuComponent} from './navigation-menu.component';
import {By} from '@angular/platform-browser';

const quixote = require('quixote');

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;
  let navMenu: HTMLDivElement;
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
    navMenu = fixture.debugElement.query(By.css('.ob-nav-menu')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled by default', () => {
    expect(component.disabled).toBeTruthy();
    expect(navMenu.classList).not.toContain('ob-active');
  });

  it('should detect change of disabled', () => {
    expect(component.disabled).toBeTruthy();
    component.disabled = false;
    fixture.detectChanges();
    expect(navMenu.classList).toContain('ob-active');
  });

  it('can toggle disabled', () => {
    expect(component.disabled).toBeTruthy();
    component.toggle();
    expect(component.disabled).toBeFalsy();
    component.toggle();
    expect(component.disabled).toBeTruthy();
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
    const centerIcon = (icon.getRawPosition().top + icon.getRawPosition().bottom) / 2;
    const labelCenter = (label.getRawPosition().top + label.getRawPosition().bottom) / 2;
    expect(centerIcon).toBeCloseTo(labelCenter);
  });


});
