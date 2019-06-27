import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {TopBarComponent} from './components/navigation/top-bar/top-bar.component';
import {ButtonToggleComponent} from './components/button/button-toggle/button-toggle.component';
import {ButtonGroupComponent} from './components/button/button-group/button-group.component';
import {ButtonIconComponent} from './components/button/button-icon/button-icon.component';
import {ButtonTextComponent} from './components/button/button-text/button-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TopBarComponent,
    ButtonTextComponent,
    ButtonToggleComponent,
    ButtonGroupComponent,
    ButtonIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
