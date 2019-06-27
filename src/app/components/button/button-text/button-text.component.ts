import {Component} from '@angular/core';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'app-button-text',
  templateUrl: '../button.component.html'
})
export class ButtonTextComponent extends ButtonComponent {
  protected styleClasses = ['ob-btn'];
}
