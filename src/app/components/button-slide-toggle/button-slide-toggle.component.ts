/* tslint:disable:variable-name no-inferrable-types */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {HasTabIndex, TabIndexAndDisable} from '../mixins/tabindex';
import {CanDisable} from '../mixins/disabled';

// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;

/** Change event object emitted by a MatSlideToggle. */
export class ObButtonSlideToggleChange {
  constructor(
    /** source: source of the event. */
    public source: ButtonSlideToggleComponent,
    /** checked: new `checked` value of the MatSlideToggle. */
    public checked: boolean) {
  }
}


/** Represents a slidable "switch" toggle that can be moved between on and off. */
@Component({
  selector: 'ob-slide-toggle',
  exportAs: 'buttonSlideToggleComponent',
  templateUrl: 'button-slide-toggle.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSlideToggleComponent extends TabIndexAndDisable implements CanDisable,
  HasTabIndex {
  private _uniqueId: string = `ob-slide-toggle-${++nextUniqueId}`;
  private _required: boolean = false;
  private _checked: boolean = false;

  /** Name value will be applied to the input element if present. */
  @Input() name: string | null = null;

  /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
  @Input() @HostBinding('id') id: string = this._uniqueId;

  /** Used to set the aria-label attribute on the underlying input element. */
  @Input('aria-label') ariaLabel: string | null = null;

  /** Used to set the aria-labelledby attribute on the underlying input element. */
  @Input('aria-labelledby') ariaLabelledby: string | null = null;

  /** Whether the slide-toggle is required. */
  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }


  /** Whether the slide-toggle element is checked or not. */
  @Input()
  set checked(value) {
    this._checked = coerceBooleanProperty(value);
    this.changeDetectorRef.markForCheck();
  }

  get checked(): boolean {
    return this._checked;
  }


  /** An event will be dispatched each time the slide-toggle changes its value. */
  @Output() readonly change: EventEmitter<ObButtonSlideToggleChange> =
    new EventEmitter<ObButtonSlideToggleChange>();

  /** Returns the unique id for the visual hidden input. */
  get inputId(): string {
    return `${this.id || this._uniqueId}-input`;
  }

  /** Reference to the underlying input element. */
  @ViewChild('input', {static: false}) _inputElement: ElementRef<HTMLInputElement>;


  constructor(@Attribute('tabindex') tabIndex: string,
              private changeDetectorRef: ChangeDetectorRef,
              elementRef: ElementRef) {
    super(elementRef);
    this.tabIndex = parseInt(tabIndex, 10) || 0;
  }

  /** Method being called whenever the underlying input emits a change event. */
  _onChangeEvent(event: Event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the component's `change` output.
    event.stopPropagation();
  }

  /** Method being called whenever the slide-toggle has been clicked. */
  _onInputClick(event: Event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `slide-toggle` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }

  /** Focuses the slide-toggle. */
  @HostListener('focus') focus(): void {
    this._inputElement.nativeElement.focus();
  }

  /** Toggles the checked state of the slide-toggle. */
  toggle(): void {
    this.checked = !this.checked;
  }

  _onClick(): void {
    this.toggle();
    this._emitChangeEvent();
  }

  /**
   * Emits a change event on the `change` output.
   */
  private _emitChangeEvent() {
    this.change.emit(new ObButtonSlideToggleChange(this, this.checked));
  }

  @HostBinding('attr.tabindex') get hostTabIndex(): number {
    if (this.disabled) {
      return null;
    } else {
      // Needs to be `-1` so it can still receive programmatic focus.
      return -1;
    }
  }
}
