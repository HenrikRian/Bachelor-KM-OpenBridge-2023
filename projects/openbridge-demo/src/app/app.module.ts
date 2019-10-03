import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonAnchorComponent, ButtonComponent} from 'openbridge-components/lib/button/button.component';
import {TopBarComponent} from 'openbridge-components/lib/navigation/top-bar/top-bar.component';
import {ButtonSlideToggleComponent} from 'openbridge-components/lib/button-slide-toggle/button-slide-toggle.component';
import {ButtonToggleModule} from 'openbridge-components';
import { NavigationMenuComponent } from 'openbridge-components/lib/navigation/navigation-menu/navigation-menu.component';
import { NavigationMenuItemComponent } from 'openbridge-components/lib/navigation/navigation-menu-item/navigation-menu-item.component';
// tslint:disable-next-line:max-line-length
import { NavigationMenuExpandableItemComponent } from 'openbridge-components/lib/navigation/navigation-menu-expandable-item/navigation-menu-expandable-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonAnchorComponent,
    TopBarComponent,
    ButtonSlideToggleComponent,
    NavigationMenuComponent,
    NavigationMenuItemComponent,
    NavigationMenuExpandableItemComponent,

  ],
  imports: [
    BrowserModule,
    ButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
