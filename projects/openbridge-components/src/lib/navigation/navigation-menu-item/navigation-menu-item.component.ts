import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuItemComponent {
  @Input() label: string;
  @Input() materialLogo: string;
  private _active = false;

  @Output() readonly changeActiveStatus: EventEmitter<MenuItemActiveChange> = new EventEmitter<MenuItemActiveChange>();

  constructor(protected _changeDetectorRef: ChangeDetectorRef) {
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
    this._changeDetectorRef.markForCheck();
  }

  get active(): boolean {
    return this._active;
  }

  @HostListener('click', ['$event'])
  public makeActive(event: Event) {
    this.active = true;
    event.stopPropagation();
  }
}
