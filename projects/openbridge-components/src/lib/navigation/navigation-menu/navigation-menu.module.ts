import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NavigationMenuComponent} from './navigation-menu.component';
import {NavigationMenuItemComponent} from '../navigation-menu-item/navigation-menu-item.component';
import {NavigationMenuExpandableItemComponent} from '../navigation-menu-expandable-item/navigation-menu-expandable-item.component';



@NgModule({
  imports: [CommonModule],
  exports: [NavigationMenuComponent, NavigationMenuItemComponent, NavigationMenuExpandableItemComponent, CommonModule, FormsModule],
  declarations: [NavigationMenuComponent, NavigationMenuItemComponent, NavigationMenuExpandableItemComponent],
})
export class NavigationMenuModule {}
