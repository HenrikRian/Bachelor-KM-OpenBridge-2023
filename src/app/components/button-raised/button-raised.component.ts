import {Component} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-button-raised',
  templateUrl: '../button/button.component.html'
})
export class ButtonRaisedComponent extends ButtonComponent {
  protected styleClasses = ['ob-raised'];

}
