import {Component, Input, OnInit} from '@angular/core';
import {NavigationMenuItemComponent} from '../navigation-menu-item/navigation-menu-item.component';

@Component({
  selector: 'ob-navigation-menu-expandable-item',
  templateUrl: './navigation-menu-expandable-item.component.html'
})
export class NavigationMenuExpandableItemComponent extends NavigationMenuItemComponent{
  @Input() collapsed = true;

  constructor() {
    super();
  }
}
