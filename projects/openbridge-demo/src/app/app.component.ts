import {Component} from '@angular/core';
import {MenuItemActiveChange} from 'openbridge-components/lib/navigation/navigation-menu-item/navigation-menu-item.component';
import {PaletteSwitchService} from './palette-switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openbridge-angular';
  menuActive = true;
  numberOfNotifications = 0;
  subTitle = 'Section';
  btnDisabled = false;
  constructor(private palletSwitchService: PaletteSwitchService) {

  }

  toggleDisable() {
    this.btnDisabled = !this.btnDisabled;
  }

  rotatePalette() {
    this.palletSwitchService.rotatePalette();
  }

  menuDisabledChange(value: boolean) {
    this.menuActive = !value;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  changeActiveView(event: MenuItemActiveChange) {
    if (event.active) {
      this.subTitle = event.source.label;
      this.numberOfNotifications++;
    }
  }

  log(txt: string) {
    console.log(txt);
  }
}
