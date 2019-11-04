import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

export class MenuItemActiveChange {
  constructor(
    /** NavigationMenuItemComponent that emits the event. */
    public source: NavigationMenuItemComponent,
    /** Active status */
    public active: boolean) {
  }
}

@Component({
  selector: 'ob-navigation-menu-item',
  templateUrl: './navigation-menu-item.component.html',
})
export class NavigationMenuItemComponent implements OnInit {
  @Input() label: string;
  @Input() materialLogo: string;
  private _active = false;

  @Output() readonly changeActiveStatus: EventEmitter<MenuItemActiveChange> = new EventEmitter<MenuItemActiveChange>();

  constructor() {
  }

  ngOnInit() {
  }

  /** Whether the element is marked as active or not. */
  @Input()
  set active(value) {
    const newActive = coerceBooleanProperty(value);
    if (this._active === newActive) {
      return;
    }
    this._active = newActive;
    this.changeActiveStatus.emit(new MenuItemActiveChange(this, this.active));
  }

  get active(): boolean {
    return this._active;
  }


  @HostListener('click', ['$event'])
  protected makeActive(event: Event) {
    this.active = true;
    event.stopPropagation();
  }


}
