import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppButtonComponent} from './app-button.component';
import {IconComponent} from '../icon/icon.component';

export {IconSize} from '../icon/icon.component';

@NgModule({
  imports: [CommonModule],
  exports: [AppButtonComponent, IconComponent],
  declarations: [AppButtonComponent, IconComponent],
})
export class AppButtonModule {}
