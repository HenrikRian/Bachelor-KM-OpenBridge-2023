import {Component} from '@angular/core';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent extends ButtonComponent {
  protected styleClasses = ['ob-btn', 'ob-normal'];
}
