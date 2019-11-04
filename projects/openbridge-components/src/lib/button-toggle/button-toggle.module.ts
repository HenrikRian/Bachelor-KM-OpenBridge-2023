import {NgModule} from '@angular/core';
import {ButtonToggleComponent, ButtonToggleGroupComponent} from './button-toggle.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [CommonModule],
  exports: [ButtonToggleComponent, ButtonToggleGroupComponent, CommonModule, FormsModule],
  declarations: [ButtonToggleComponent, ButtonToggleGroupComponent],
})
export class ButtonToggleModule {}
