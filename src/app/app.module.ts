import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonAnchorComponent, ButtonComponent} from './components/button/button.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';
import {ButtonSlideToggleComponent} from './components/button-slide-toggle/button-slide-toggle.component';
import {ButtonToggleModule} from './components/button-toggle/button-toggle-module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonAnchorComponent,
    TopBarComponent,
    ButtonSlideToggleComponent,
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
