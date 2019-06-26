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
    <div class="ob-nav-item ob-nav-btn" id="btn-hamburger">
      <i class="material-icons" id="icon-hamburger">menu</i>
      <div class="ob-nav-menu-title" id="title-hamburger">Ecdis</div>
    </div>
    <div class="ob-sub-title ob-nav-item" id="title">App title</div>
  </div>
  <div class="ob-menu-container">
    <div class="ob-divider" id="divider"></div>
    <div class="ob-nav-item ob-nav-btn" id="btn-left">
      <i class="material-icons" id="icon-left">notifications</i>
    </div>
    <div class="ob-nav-item ob-nav-btn" id="btn-middle" >
      <i class="material-icons" id="icon-middle">brightness_4</i>
    </div>
    <div class="ob-nav-item ob-nav-btn" id="btn-right">
      <i class="material-icons" id="icon-right">apps</i>
    </div>
  </div>
</div>
  `);
    navbarContainer = frame.get('#navbar-container');
    rem = navbarContainer.calculatePixelValue('1rem');
  });

  it('First icon is 2 rem from edges', () => {
    const firstIcon = frame.get('#icon-hamburger');
    firstIcon.assert({
      left: navbarContainer.left.plus(2 * rem),
      top: navbarContainer.top.plus(2 * rem),
      bottom: navbarContainer.bottom.minus(2 * rem),
    });
  });

  it('Last icon is 2 rem from edges', () => {
    const lastIcon = frame.get('#icon-right');
    lastIcon.assert({
      right: navbarContainer.right.minus(2 * rem),
      top: navbarContainer.top.plus(2 * rem),
      bottom: navbarContainer.bottom.minus(2 * rem),
    });
  });

  it('Menu name should be 2 rem from everything', () => {
    const menuName = frame.get('#title-hamburger');
    const menuIcion = frame.get('#icon-hamburger');
    const menuBtn = frame.get('#btn-hamburger');
    menuName.assert({
      top: container.top.plus(2 * rem),
      bottom: container.bottom.minus(2 * rem),
      left: menuIcion.right.plus(2 * rem),
      right: menuBtn.right.minus(2 * rem)
    });
  });


  it('Icons should be 3X3 rem', () => {
    const icon = frame.get('#icon-right');
    icon.assert({
      width: 3 * rem,
      height: 3 * rem
    });
  });

  it('Button should be squared', () => {
    const btn = frame.get('#btn-right');
    // noinspection JSSuspiciousNameCombination
    btn.assert({
      width: btn.height
    });
  });

  it('Button should have same height as navbar', () => {
    const btn = frame.get('#btn-right');
    btn.assert({
      top: navbarContainer.top,
      bottom: navbarContainer.bottom,
    });
  });

  it('Divider should be adjacent to button', () => {
    const divider = frame.get('#divider');
    const icon = frame.get('#btn-left');
    divider.assert({
      right: icon.left
    });
  });

  it('Buttons should be adjacent', () => {
    const btnLeft = frame.get('#btn-left');
    const btnMiddle = frame.get('#btn-middle');
    btnLeft.assert({
      right: btnMiddle.left
    });
  });

  it('Spacing between divider and the container should be equal on top and bottom', () => {
    const divider = frame.get('#divider');
    const topDistance = divider.getRawPosition().top - container.getRawPosition().top;
    const bottomDistance = divider.getRawPosition().bottom - container.getRawPosition().bottom;
    expect(topDistance).toBeCloseTo(-bottomDistance, 0);
  });

});
