import {Component, Input} from '@angular/core';

export enum IconSize {
  normal = 'normal',
  large = 'large'
}

@Component({
  selector: 'ob-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() icon: string;
  @Input() size: IconSize = IconSize.normal;

  constructor() {
  }

}


