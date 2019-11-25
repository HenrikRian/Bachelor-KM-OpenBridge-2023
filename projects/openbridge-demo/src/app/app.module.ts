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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
