import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TopBarComponent} from './top-bar.component';


@NgModule({
  imports: [CommonModule],
  exports: [TopBarComponent, CommonModule, FormsModule],
  declarations: [TopBarComponent],
})
export class TopBarModule {
}
