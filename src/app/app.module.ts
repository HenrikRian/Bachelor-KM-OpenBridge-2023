import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonAnchorComponent, ButtonComponent} from './components/button/button.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';
import {ButtonGroupComponent} from './components/button-group/button-group.component';
import {ButtonSlideToggleComponent} from './components/button-slide-toggle/button-slide-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonAnchorComponent,
    TopBarComponent,
    ButtonSlideToggleComponent,
    ButtonGroupComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
