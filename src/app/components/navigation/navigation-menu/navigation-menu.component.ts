import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItemActiveChange, NavigationMenuItemComponent} from '../navigation-menu-item/navigation-menu-item.component';


@Component({
  selector: 'ob-navigation-menu',
  templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent {
  private activeNavigationMenuItem: NavigationMenuItemComponent;

  @Output() readonly changeActiveItem: EventEmitter<MenuItemActiveChange> =
    new EventEmitter<MenuItemActiveChange>();

  @Input() disabled = true;


  constructor() {
  }

  public onActiveItemChange(event: MenuItemActiveChange) {
    if (event.active) {
      if (this.activeNavigationMenuItem !== undefined) {
        this.activeNavigationMenuItem.active = false;
      }
      this.activeNavigationMenuItem = event.source;
    }
    this.changeActiveItem.emit(event);
  }

  public toggle() {
    this.disabled = !this.disabled;
  }
}
