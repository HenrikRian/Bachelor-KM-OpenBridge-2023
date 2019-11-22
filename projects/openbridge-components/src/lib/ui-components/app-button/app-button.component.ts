import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IconSize} from '../icon/icon.component';

@Component({
  selector: 'ob-app-button',
  templateUrl: './app-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent {
  @Input() icon: string;
  @Input() label: string;
  @Input() size: IconSize;
  IconSize = IconSize;

  constructor() {
  }

}
