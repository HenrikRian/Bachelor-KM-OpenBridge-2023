/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Input} from '@angular/core';


/** Mixin to augment a directive with a `disabled` property. */
export class CanDisable implements CanDisable {
  // tslint:disable-next-line:variable-name
  private _disabled = false;

  @Input() set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  get disabled() {
    return this._disabled;
  }
}
