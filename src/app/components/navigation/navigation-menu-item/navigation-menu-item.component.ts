import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ob-navigation-menu-item',
  templateUrl: './navigation-menu-item.component.html'
})
export class NavigationMenuItemComponent implements OnInit {
  @Input() label: string;
  @Input() materialLogo: string;
  @Input() active = false;
  constructor() { }

  ngOnInit() {
  }

  protected onClick() {
    this.active = true;
  }

}
