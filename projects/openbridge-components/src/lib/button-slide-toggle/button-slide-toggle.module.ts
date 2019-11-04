import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonSlideToggleComponent} from './button-slide-toggle.component';


@NgModule({
  imports: [CommonModule],
  exports: [ButtonSlideToggleComponent, CommonModule, FormsModule],
  declarations: [ButtonSlideToggleComponent],
})
export class ButtonSlideToggleModule {
}
