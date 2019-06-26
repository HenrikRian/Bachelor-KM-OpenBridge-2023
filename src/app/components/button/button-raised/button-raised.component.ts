import {Component} from '@angular/core';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'app-button-raised',
  templateUrl: '../button.component.html'
})
export class ButtonRaisedComponent extends ButtonComponent {
  protected styleClasses = ['ob-raised'];

}
