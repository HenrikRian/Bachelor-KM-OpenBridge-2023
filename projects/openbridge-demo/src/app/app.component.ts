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
  isSelected = true;
  menuActive = true;
  numberOfNotifications = 0;
  subTitle = 'Section';
  constructor(private palletSwitchService: PaletteSwitchService) {

  }

  rotatePalette() {
    this.palletSwitchService.rotatePalette();
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
