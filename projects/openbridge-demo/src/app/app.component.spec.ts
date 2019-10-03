import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TopBarComponent} from '../../../openbridge-components/src/lib/navigation/top-bar/top-bar.component';
import {ButtonAnchorComponent, ButtonComponent} from '../../../openbridge-components/src/lib/button/button.component';
import {ButtonSlideToggleComponent} from '../../../openbridge-components/src/lib/button-slide-toggle/button-slide-toggle.component';
import {ButtonToggleGroupComponent} from '../../../openbridge-components/src/lib/button-toggle/button-toggle.component';
import {NavigationMenuComponent} from '../../../openbridge-components/src/lib/navigation/navigation-menu/navigation-menu.component';
import {NavigationMenuItemComponent} from '../../../openbridge-components/src/lib/navigation/navigation-menu-item/navigation-menu-item.component';
// tslint:disable-next-line:max-line-length
import {NavigationMenuExpandableItemComponent} from '../../../openbridge-components/src/lib/navigation/navigation-menu-expandable-item/navigation-menu-expandable-item.component';


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
