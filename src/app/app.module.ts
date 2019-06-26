import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TopBarComponent } from './components/navigation/top-bar/top-bar.component';
import { ButtonNormalComponent } from './components/button/button-normal/button-normal.component';
import { ButtonRaisedComponent } from './components/button/button-raised/button-raised.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TopBarComponent,
    ButtonNormalComponent,
    ButtonRaisedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
