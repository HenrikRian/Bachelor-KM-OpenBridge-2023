import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {NavigationMenuComponent} from './navigation-menu.component';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {NavigationMenuItemComponent} from '../navigation-menu-item/navigation-menu-item.component';
import {NavigationMenuExpandableItemComponent} from '../navigation-menu-expandable-item/navigation-menu-expandable-item.component';

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

@Component({
  template: `
    <ob-navigation-menu #menu>
      <ob-navigation-menu-item id="firstNavItem" [label]="'first'" (changeActiveStatus)="menu.onActiveItemChange($event)">
      </ob-navigation-menu-item>
      <ob-navigation-menu-expandable-item id="secondNavItem"  [label]="'second'" (changeActiveStatus)="menu.onActiveItemChange($event)">
      </ob-navigation-menu-expandable-item>
    </ob-navigation-menu>
  `
})
class NavigationMenuWithItemsComponent {
}

describe('Navigation menu with items', () => {
  let component: NavigationMenuWithItemsComponent;
  let menuComponent: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuWithItemsComponent>;
  let navItemFirst: DebugElement;
  let navItemSecond: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationMenuWithItemsComponent,
        NavigationMenuComponent,
        NavigationMenuItemComponent,
        NavigationMenuExpandableItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuWithItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    navItemFirst = fixture.debugElement.query(By.css('#firstNavItem'));
    navItemSecond = fixture.debugElement.query(By.css('#secondNavItem'));
    const menuComponentDebugElement = fixture.debugElement.query(By.directive(NavigationMenuComponent));
    menuComponent = menuComponentDebugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get activated event', fakeAsync(() => {
    const changeSpy = jasmine.createSpy('navigation active change listener');
    menuComponent.changeActiveItem.subscribe(changeSpy);

    navItemFirst.nativeElement.click();
    fixture.detectChanges();
    tick();
    expect(changeSpy).toHaveBeenCalledTimes(1);
  }));

  it('should get activated event also for extended items', fakeAsync(() => {
    const changeSpy = jasmine.createSpy('navigation active change listener');
    menuComponent.changeActiveItem.subscribe(changeSpy);

    navItemSecond.nativeElement.click();
    fixture.detectChanges();
    tick();
    expect(changeSpy).toHaveBeenCalledTimes(1);
  }));

  it('should get change the disable active element when new element gets active', fakeAsync(() => {
    navItemFirst.nativeElement.click();
    fixture.detectChanges();
    tick();
    expect(navItemFirst.componentInstance.active).toBeTruthy();

    navItemSecond.nativeElement.click();
    fixture.detectChanges();
    tick();
    expect(navItemFirst.componentInstance.active).toBeFalsy();
    expect(navItemSecond.componentInstance.active).toBeTruthy();
  }));
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


