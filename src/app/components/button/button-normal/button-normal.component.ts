import {Component} from '@angular/core';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'app-button-normal',
  templateUrl: '../button.component.html'
})
export class ButtonNormalComponent extends ButtonComponent {
  protected styleClasses = ['ob-btn', 'ob-normal'];
}
