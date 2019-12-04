import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  AppButtonModule,
  ButtonModule,
  ButtonSlideToggleModule,
  ButtonToggleModule,
  NavigationMenuModule,
  TopBarModule
} from 'openbridge-components';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonToggleModule,
    ButtonModule,
    ButtonSlideToggleModule,
    NavigationMenuModule,
    TopBarModule,
    AppButtonModule
  ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
