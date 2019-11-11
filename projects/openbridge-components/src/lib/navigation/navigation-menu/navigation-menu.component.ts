import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {
  MenuItemActiveChange,
  NavigationMenuItemComponent
} from '../navigation-menu-item/navigation-menu-item.component';


@Component({
  selector: 'ob-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuComponent {
  private activeNavigationMenuItem: NavigationMenuItemComponent;

  @Output() readonly changeActiveItem: EventEmitter<MenuItemActiveChange> =
    new EventEmitter<MenuItemActiveChange>();

  @Output() readonly changeDisabled: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _disabled = true;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    if (value === this._disabled) {
      return;
    }
    this._disabled = value;
    this.changeDisabled.emit(this._disabled);
    this._changeDetectorRef.markForCheck();
  }

  @Input() numberOfNotifications = 0;
  @Input() logoSrc: string;


  constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

  public onActiveItemChange(event: MenuItemActiveChange) {
    if (event.active) {
      if (this.activeNavigationMenuItem !== undefined) {
        this.activeNavigationMenuItem.active = false;
      }
      this.activeNavigationMenuItem = event.source;
    }
    this.changeActiveItem.emit(event);
    this.disabled = true;
  }

  public toggle() {
    this.disabled = !this.disabled;
  }
}
