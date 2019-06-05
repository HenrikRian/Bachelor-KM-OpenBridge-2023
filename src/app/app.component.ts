import { Component } from '@angular/core';
import {PaletteSwitchService} from './palette-switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openbridge-angular';

  constructor(private palletSwitchService: PaletteSwitchService) {

  }
}
