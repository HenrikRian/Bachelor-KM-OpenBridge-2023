import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ob-navigation-menu',
  templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent implements OnInit {

  @Input() disabled = true;

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.disabled = !this.disabled;
  }
}
