import {Component} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-button-normal',
  templateUrl: '../button/button.component.html'
})
export class ButtonNormalComponent extends ButtonComponent {
  protected styleClasses = ['ob-normal'];
}
