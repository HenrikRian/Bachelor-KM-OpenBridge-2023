import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {NavigationMenuItemComponent} from '../navigation-menu-item/navigation-menu-item.component';

@Component({
  selector: 'ob-navigation-menu-expandable-item',
  templateUrl: './navigation-menu-expandable-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationMenuExpandableItemComponent extends NavigationMenuItemComponent {
  @Input() collapsed = true;

  constructor(protected _changeDetectorRef: ChangeDetectorRef) {
    super(_changeDetectorRef);
  }

  public onToggleCollapsedClick(event: Event) {
    this.toggleCollapsed();
    event.stopPropagation();
  }

  public toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this._changeDetectorRef.markForCheck();
  }
}
