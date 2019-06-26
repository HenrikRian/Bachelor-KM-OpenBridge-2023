import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TopBarComponent} from './top-bar.component';
import * as assert from 'assert';

const quixote = require('quixote');

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarComponent]
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
  let navbarContainer;
  let rem;

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
<div class="ob-nav-top-bar" id="navbar-container">
  <div class="ob-menu-container">
    <div class="ob-nav-item ob-nav-btn" >
      <i class="material-icons" id="first-icon">menu</i>
    </div>
    <div class="ob-sub-title ob-nav-item" id="title">App title</div>
  </div>
  <div class="ob-menu-container">
    <div class="ob-divider" id="divider"></div>
    <div class="ob-nav-item ob-nav-btn">
      <i class="material-icons" id="icon-right-of-divider">notifications</i>
    </div>
    <div class="ob-nav-item ob-nav-btn" >
      <i class="material-icons" id="second-last-icon">brightness_4</i>
    </div>
    <div class="ob-nav-item ob-nav-btn" id="icon-btn">
      <i class="material-icons" id="last-icon">apps</i>
    </div>
  </div>
</div>
  `);
    navbarContainer = frame.get('#navbar-container');
    rem = navbarContainer.calculatePixelValue('1rem');
  });

  it('First icon is 2 rem from edges', () => {
    const firstIcon = frame.get('#first-icon');
    firstIcon.assert({
      left: navbarContainer.left.plus(2 * rem),
      top: navbarContainer.top.plus(2 * rem),
      bottom: navbarContainer.bottom.minus(2 * rem),
    });
  });

  it('Last icon is 2 rem from edges', () => {
    const lastIcon = frame.get('#last-icon');
    lastIcon.assert({
      right: navbarContainer.right.minus(2 * rem),
      top: navbarContainer.top.plus(2 * rem),
      bottom: navbarContainer.bottom.minus(2 * rem),
    });
  });

  it('Icons shold be 3 rem apart', () => {
    const secondLastIcon = frame.get('#second-last-icon');
    const lastIcon = frame.get('#last-icon');
    lastIcon.assert({
      left: secondLastIcon.right.plus(3 * rem)
    });
  });

  it('Icons should be 3X3 rem', () => {
    const icon = frame.get('#last-icon');
    icon.assert({
      width: 3 * rem,
      height: 3 * rem
    });
  });

  it('Title should be 3 rem from icon', () => {
    const secondLastIcon = frame.get('#first-icon');
    const lastIcon = frame.get('#title');
    lastIcon.assert({
      left: secondLastIcon.right.plus(3 * rem)
    });
  });

  it('Button should be squared', () => {
    const btn = frame.get('#icon-btn');
    btn.assert({
      width: btn.height
    });
  });

  it('Divider should be 2 rem from icon', () => {
    const divider = frame.get('#divider');
    const icon = frame.get('#icon-right-of-divider');
    divider.assert({
      right: icon.left.minus(2 * rem)
    });
  });

});
