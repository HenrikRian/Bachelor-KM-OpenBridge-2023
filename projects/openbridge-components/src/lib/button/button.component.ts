/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation} from '@angular/core';
import {CanDisable} from '../mixins/disabled';


/**
 * OpenBridge design button.
 */
@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: `button[ob-button-raised], button[ob-button-normal]`,
  exportAs: 'ButtonComponent',
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends CanDisable {

  @HostBinding('class.ob-btn') btnClass = true;

  @HostBinding('class.ob-raised') get isRaised(): boolean {
    return this._hasHostAttributes('ob-button-raised');
  }

  @HostBinding('class.ob-normal') get isNormal(): boolean {
    return this._hasHostAttributes('ob-button-normal');
  }

  @HostBinding('attr.disabled') get isDisabled() {
    return this.disabled || null;
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  /** Focuses the button. */
  focus(): void {
    this._getHostElement().focus();
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

  /** Gets whether the button has one of the given attributes. */
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  @HostListener('click', ['$event']) _haltDisabledEvents(event: Event) {
    // A disabled button shouldn't apply any actions
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}

/**
 * Material design anchor button.
 */
@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: `a[ob-button-raised], a[ob-button-normal]`,
  exportAs: 'ButtonAnchorComponent',
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonAnchorComponent extends ButtonComponent {
  /** Tabindex of the button. */
  @Input() tabIndex: number;

  @HostBinding('attr.tabindex') get _tabIndex() {
    return this.disabled ? -1 : (this.tabIndex || 0);
  }

  @HostBinding('attr.aria-disabled') get ariaDisabled(): string {
    return this.disabled.toString();
  }

  constructor(
    elementRef: ElementRef) {
    super(elementRef);
  }


}
