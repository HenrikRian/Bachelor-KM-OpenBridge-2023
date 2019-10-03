import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonAnchorComponent, ButtonComponent} from './button.component';


@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent, ButtonAnchorComponent, CommonModule, FormsModule],
  declarations: [ButtonComponent, ButtonAnchorComponent],
})
export class ButtonModule {
}
