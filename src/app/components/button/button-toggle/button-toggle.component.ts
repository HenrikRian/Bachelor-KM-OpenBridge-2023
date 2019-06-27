import { Component } from '@angular/core';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'app-button-toggle',
  templateUrl: '../button.component.html',
})
export class ButtonToggleComponent extends ButtonComponent {
  protected styleClasses = ['ob-toggle-switch'];
  protected setSelectedOnClick = true;
}
