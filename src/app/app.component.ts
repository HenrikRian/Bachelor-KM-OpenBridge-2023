import { Component } from '@angular/core';
import {PaletteSwitchService} from './palette-switch.service';
import {ComponentStyle} from './variables';

@Component({
  selector: 'ob-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openbridge-angular';
  isSelected = true;
  normalStyle = ComponentStyle.Normal;
  raisedStyle = ComponentStyle.Raised;
  constructor(private palletSwitchService: PaletteSwitchService) {

  }

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }

  log(txt: string) {
    console.log(txt);
  }
}
