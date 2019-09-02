import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';
import {ButtonAnchorComponent, ButtonComponent} from './components/button/button.component';
import {ButtonSlideToggleComponent} from './components/button-slide-toggle/button-slide-toggle.component';
import {ButtonToggleGroupComponent} from './components/button-toggle/button-toggle.component';
import {NavigationMenuComponent} from './components/navigation/navigation-menu/navigation-menu.component';
import {NavigationMenuItemComponent} from './components/navigation/navigation-menu-item/navigation-menu-item.component';
// tslint:disable-next-line:max-line-length
import {NavigationMenuExpandableItemComponent} from './components/navigation/navigation-menu-expandable-item/navigation-menu-expandable-item.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ButtonComponent,
        ButtonAnchorComponent,
        ButtonSlideToggleComponent,
        ButtonToggleGroupComponent,
        NavigationMenuComponent,
        NavigationMenuItemComponent,
        NavigationMenuExpandableItemComponent,
        TopBarComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'App title'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('openbridge-angular');
  });
});
