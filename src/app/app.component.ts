import { Component } from '@angular/core';
import {PaletteSwitchService} from './palette-switch.service';
import {ComponentStyle} from './variables';
import {MenuItemActiveChange} from './components/navigation/navigation-menu-item/navigation-menu-item.component';

@Component({
  selector: 'ob-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openbridge-angular';
  isSelected = true;
  menuActive = true;
  subTitle = 'Section';
  constructor(private palletSwitchService: PaletteSwitchService) {

  }

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  changeActiveView(event: MenuItemActiveChange) {
    if (event.active) {
      this.subTitle = event.source.label;
    }
  }

  log(txt: string) {
    console.log(txt);
  }
}
