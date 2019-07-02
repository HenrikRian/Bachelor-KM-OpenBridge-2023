/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {CanDisable} from './disabled';
import {Input} from '@angular/core';

const defaultTabIndex = 0;

/** @docs-private */
export interface HasTabIndex {
  /** Tabindex of the component. */
  tabIndex: number;
}

/** Mixin to augment a directive with a `tabIndex` property. */
export class TabIndexAndDisable extends CanDisable {
  // tslint:disable-next-line:variable-name
  private _tabIndex: number = defaultTabIndex;

  @Input()  set tabIndex(value: number) {
    // If the specified tabIndex value is null or undefined, fall back to the default value.
    this._tabIndex = value != null ? value : defaultTabIndex;
  }

  get tabIndex(): number {
    return this.disabled ? -1 : this._tabIndex;
  }
}

