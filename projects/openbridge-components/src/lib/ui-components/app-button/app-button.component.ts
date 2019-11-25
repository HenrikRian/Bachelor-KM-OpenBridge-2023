import {ChangeDetectionStrategy, Component, ElementRef, Input} from '@angular/core';
import {IconSize} from '../icon/icon.component';
import {CanDisable} from 'openbridge-components/lib/mixins/disabled';

@Component({
  selector: 'ob-app-button',
  templateUrl: './app-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent extends CanDisable {
  @Input() icon: string;
  @Input() label: string;
  @Input() size: IconSize;
  IconSize = IconSize;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
