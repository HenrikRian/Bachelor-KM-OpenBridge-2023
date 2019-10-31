import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {SelectionModel} from '@angular/cdk/collections';
import {
  AfterContentInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  InjectionToken,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


/** Acceptable types for a button toggle. */
export type ToggleType = 'checkbox' | 'radio';

/** Possible appearance styles for the button toggle. */
export type MatButtonToggleAppearance = 'legacy' | 'standard';

/**
 * Represents the default options for the button toggle that can be configured
 * using the `MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS` injection token.
 */
export interface MatButtonToggleDefaultOptions {
  appearance?: MatButtonToggleAppearance;
}

/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 */
export const MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS =
  new InjectionToken<MatButtonToggleDefaultOptions>('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');


/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export const MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ButtonToggleGroupComponent), /* tslint:disable-line:no-use-before-declare*/
  multi: true
};

let _uniqueIdCounter = 0;

/** Change event object emitted by ButtonToggleComponent. */
export class ButtonToggleChange {
  constructor(
    /** The ButtonToggleComponent that emits the event. */
    public source: ButtonToggleComponent,
    /** The value assigned to the ButtonToggleComponent. */
    public value: any) {
  }
}

/** Exclusive selection button toggle group that behaves like a radio-button group. */
@Component({
  selector: 'ob-button-toggle-group',
  providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    role: 'group',
    class: 'ob-btn-group',
    '[attr.aria-disabled]': 'disabled',
  },
  templateUrl: 'button-toggle-group.component.html'
})
export class ButtonToggleGroupComponent implements ControlValueAccessor, OnInit, AfterContentInit {

  /** `name` attribute for the underlying `input` element. */
  @Input()
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;

    if (this._buttonToggles) {
      this._buttonToggles.forEach(toggle => {
        toggle.name = this._name;
        toggle._markForCheck();
      });
    }
  }

  /** Value of the toggle group. */
  @Input()
  get value(): any {
    const selected = this._selectionModel ? this._selectionModel.selected : [];

    if (this.multiple) {
      return selected.map(toggle => toggle.value);
    }

    return selected[0] ? selected[0].value : undefined;
  }

  set value(newValue: any) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }

  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : (selected[0] || null);
  }

  /** Whether multiple button toggles can be selected. */
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }

  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }

  /** Whether multiple button toggle group is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);

    if (this._buttonToggles) {
      this._buttonToggles.forEach(toggle => toggle._markForCheck());
    }
  }

  constructor(
    private _changeDetector: ChangeDetectorRef,
    @Optional() @Inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS)
      defaultOptions?: MatButtonToggleDefaultOptions) {

    this.appearance =
      defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
  }

  private _multiple = false;
  private _disabled = false;
  private _selectionModel: SelectionModel<ButtonToggleComponent>;

  /**
   * Reference to the raw value that the consumer tried to assign. The real
   * value will exclude any values from this one that don't correspond to a
   * toggle. Useful for the cases where the value is assigned before the toggles
   * have been initialized or at the same that they're being swapped out.
   */
  private _rawValue: any;

  /** Child button toggle buttons. */
    // tslint:disable-next-line:no-use-before-declare
  @ContentChildren(forwardRef(() => ButtonToggleComponent)) _buttonToggles: QueryList<ButtonToggleComponent>;

  /** The appearance for all the buttons in the group. */
  @Input() appearance: MatButtonToggleAppearance;
  private _name = `mat-button-toggle-group-${_uniqueIdCounter++}`;

  /**
   * Event that emits whenever the value of the group changes.
   * Used to facilitate two-way data binding.
   * @docs-private
   */
  @Output() readonly valueChange = new EventEmitter<any>();

  /** Event emitted when the group's value changes. */
  @Output() readonly change: EventEmitter<ButtonToggleChange> =
    new EventEmitter<ButtonToggleChange>();

  /**
   * The method to be called in order to update ngModel.
   * Now `ngModel` binding is not supported in multiple selection mode.
   */
  _controlValueAccessorChangeFn: (value: any) => void = () => {};

  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  _onTouched: () => any = () => {};

  ngOnInit() {
    this._selectionModel = new SelectionModel<ButtonToggleComponent>(this.multiple, undefined, false);
  }

  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter(toggle => toggle.checked));
  }

  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value: any) {
    this.value = value;
    this._changeDetector.markForCheck();
  }

  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(): void {
    const selected = this.selected;
    const source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
    const event = new ButtonToggleChange(source, this.value);
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }

  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle: ButtonToggleComponent,
                    select: boolean,
                    isUserInput = false,
                    deferEvents = false) {
    // Deselect the currently-selected toggle, if we're in single-selection
    // mode and the button being toggled isn't selected at the moment.
    if (!this.multiple && this.selected && !toggle.checked) {
      (this.selected as ButtonToggleComponent).checked = false;
    }

    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }

    // We need to defer in some cases in order to avoid "changed after checked errors", however
    // the side-effect is that we may end up updating the model value out of sequence in others
    // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.
    if (deferEvents) {
      Promise.resolve(() => this._updateModelValue(isUserInput));
    } else {
      this._updateModelValue(isUserInput);
    }
  }

  /** Checks whether a button toggle is selected. */
  _isSelected(toggle: ButtonToggleComponent) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }

  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle: ButtonToggleComponent) {
    if (typeof this._rawValue === 'undefined') {
      return false;
    }

    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some(value => toggle.value != null && value === toggle.value);
    }

    return toggle.value === this._rawValue;
  }

  /** Updates the selection state of the toggles in the group based on a value. */
  private _setSelectionByValue(value: any | any[]) {
    this._rawValue = value;

    if (!this._buttonToggles) {
      return;
    }

    if (this.multiple && value) {
      if (!Array.isArray(value)) {
        throw Error('Value must be an array in multiple-selection mode.');
      }

      this._clearSelection();
      value.forEach((currentValue: any) => this._selectValue(currentValue));
    } else {
      this._clearSelection();
      this._selectValue(value);
    }
  }

  /** Clears the selected toggles. */
  private _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach(toggle => toggle.checked = false);
  }

  /** Selects a value if there's a toggle that corresponds to it. */
  private _selectValue(value: any) {
    const correspondingOption = this._buttonToggles.find(toggle => {
      return toggle.value != null && toggle.value === value;
    });

    if (correspondingOption) {
      correspondingOption.checked = true;
      this._selectionModel.select(correspondingOption);
    }
  }

  /** Syncs up the group's value with the model and emits the change event. */
  private _updateModelValue(isUserInput: boolean) {
    // Only emit the change event for user input.
    if (isUserInput) {
      this._emitChangeEvent();
    }

    // Note: we emit this one no matter whether it was a user interaction, because
    // it is used by Angular to sync up the two-way data binding.
    this.valueChange.emit(this.value);
  }
}

// Boilerplate for applying mixins to the ButtonToggleComponent class.
/** @docs-private */
class MatButtonToggleBase {
}

const _MatButtonToggleMixinBase: typeof MatButtonToggleBase = (MatButtonToggleBase);

/** Single button inside of a toggle group. */
@Component({
  moduleId: module.id,
  selector: 'button[ob-button-toggle]',   // tslint:disable-line:component-selector
  templateUrl: 'button-toggle.component.html',
  encapsulation: ViewEncapsulation.None,
  exportAs: 'ButtonToggleComponent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'ob-btn',
    // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
    // but can still receive focus from things like cdkFocusInitial.
    '[attr.id]': 'id',
    '[id]': 'buttonId',
    '[attr.tabindex]': 'disabled ? -1 : tabIndex',
    '[attr.aria-pressed]': 'checked',
    '[disabled]': 'disabled || null',
    '[attr.name]': 'name || null',
    '[attr.aria-label]': 'ariaLabel',
    '[attr.aria-labelledby]': 'ariaLabelledby',
    '(focus)': 'focus()',
    '(click)': '_onButtonClick()',
    '[class.ob-selected]': 'checked'
  }
})
export class ButtonToggleComponent extends _MatButtonToggleMixinBase implements OnInit,
   OnDestroy {

  /** ButtonToggleGroupComponent reads this to assign its own value. */
  @Input() value: any;

  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  @Input('aria-label') ariaLabel: string;

  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  @Input('aria-labelledby') ariaLabelledby: string | null = null;



    /** Whether the button is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled || (this.buttonToggleGroup && this.buttonToggleGroup.disabled);
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }

  /** The unique ID for this button toggle. */
  @Input() id: string;

  /** HTML's 'name' attribute used to group radios for unique selection. */
  @Input() name: string;



  /** Tabindex for the toggle. */
  @Input() tabIndex: number | null;

  /** The appearance style of the button. */
  @Input()
  get appearance(): MatButtonToggleAppearance {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }

  set appearance(value: MatButtonToggleAppearance) {
    this._appearance = value;
  }

  private _appearance: MatButtonToggleAppearance;

  /** Whether the button is checked. */
  @Input()
  get checked(): boolean {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }

  set checked(value: boolean) {
    const newValue = coerceBooleanProperty(value);

    if (newValue !== this._checked) {
      this._checked = newValue;

      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }

      this._changeDetectorRef.markForCheck();
    }
  }

   /** Type of the button toggle. Either 'radio' or 'checkbox'. */
  _type: ToggleType;

  @ViewChild('button', {static: false}) _buttonElement: ElementRef<HTMLButtonElement>;

  /** The parent button toggle group (exclusive selection). Optional. */
  buttonToggleGroup: ButtonToggleGroupComponent;

  /** Unique ID for the underlying `button` element. */
  get buttonId(): string {
    return `${this.id}-button`;
  }

  private _isSingleSelector = false;
  private _checked = false;

  private _disabled = false;

  /** Event emitted when the group value changes. */
  @Output() readonly change: EventEmitter<ButtonToggleChange> =
    new EventEmitter<ButtonToggleChange>();

  constructor(@Optional() toggleGroup: ButtonToggleGroupComponent,
              private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef<HTMLElement>,
              private _focusMonitor: FocusMonitor,
              // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
              @Attribute('tabindex') defaultTabIndex: string,
              @Optional() @Inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS)
                defaultOptions?: MatButtonToggleDefaultOptions) {
    super();

    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    this.buttonToggleGroup = toggleGroup;
    this.appearance =
      defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
  }

  ngOnInit() {
    this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
    this._type = this._isSingleSelector ? 'radio' : 'checkbox';
    this.id = this.id || `mat-button-toggle-${_uniqueIdCounter++}`;

    if (this._isSingleSelector) {
      this.name = this.buttonToggleGroup.name;
    }

    if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
      this.checked = true;
    }

    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    const group = this.buttonToggleGroup;

    this._focusMonitor.stopMonitoring(this._elementRef);

    // Remove the toggle from the selection once it's destroyed. Needs to happen
    // on the next tick in order to avoid "changed after checked" errors.
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }

  /** Focuses the button. */
  focus(options?: FocusOptions): void {
    this._elementRef.nativeElement.focus(options);
  }

  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    const newChecked = this._isSingleSelector ? true : !this._checked;

    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    // Emit a change event when it's the single selector
    this.change.emit(new ButtonToggleChange(this, this.value));
  }

  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    // When the group value changes, the button will not be notified.
    // Use `markForCheck` to explicit update button toggle's status.
    this._changeDetectorRef.markForCheck();
  }
}
