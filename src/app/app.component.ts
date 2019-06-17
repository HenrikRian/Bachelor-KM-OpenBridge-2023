import { Component } from '@angular/core';
import {PaletteSwitchService} from './palette-switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openbridge-angular';
  isSelected = true;
  constructor(private palletSwitchService: PaletteSwitchService) {

  }

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }
}
