import {Component, Input} from '@angular/core';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'ob-button-icon',
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent extends ButtonComponent {
  @Input() materialDesignIconName: string;
  protected styleClasses = ['ob-btn'];
}
