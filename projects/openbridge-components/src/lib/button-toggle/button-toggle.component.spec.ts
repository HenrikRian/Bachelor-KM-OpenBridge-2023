// import {dispatchMouseEvent} from '@angular/cdk/testing';
import {Component, DebugElement, QueryList, ViewChildren} from '@angular/core';
import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';
import {FormControl, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {ButtonToggleModule} from 'openbridge-components';
import {ButtonToggleChange, ButtonToggleComponent, ButtonToggleGroupComponent} from './button-toggle.component';



@Component({
  template: `
    <ob-button-toggle-group [disabled]="isGroupDisabled"
                            [(value)]="groupValue">
      <button ob-button-toggle value="test1" *ngIf="renderFirstToggle">Test1</button>
      <button ob-button-toggle value="test2">Test2</button>
      <button ob-button-toggle value="test3">Test3</button>
    </ob-button-toggle-group>
  `
})
class ButtonTogglesInsideButtonToggleGroupComponent {
  isGroupDisabled = false;
  groupValue: string;
  renderFirstToggle = true;
}

@Component({
  template: `
    <ob-button-toggle-group
      [name]="groupName"
      [(ngModel)]="modelValue"
      (change)="lastEvent = $event">
      <button ob-button-toggle *ngFor="let option of options" [value]="option.value">
        {{option.label}}
      </button>
    </ob-button-toggle-group>
  `
})
class ButtonToggleGroupWithNgModelComponent {
  groupName = 'group-name';
  modelValue: string;
  options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
  ];
  lastEvent: ButtonToggleChange;
}

@Component({
  template: `
    <ob-button-toggle-group [disabled]="isGroupDisabled" multiple>
      <button ob-button-toggle value="eggs">Eggs</button>
      <button ob-button-toggle value="flour">Flour</button>
      <button ob-button-toggle value="sugar">Sugar</button>
    </ob-button-toggle-group>
  `
})
class ButtonTogglesInsideButtonToggleGroupMultipleComponent {
  isGroupDisabled = false;
}

@Component({
  template: `
    <ob-button-toggle-group multiple [value]="value">
      <button ob-button-toggle [value]="0">Eggs</button>
      <button ob-button-toggle [value]="null">Flour</button>
      <button ob-button-toggle [value]="false">Sugar</button>
      <button ob-button-toggle>Sugar</button>
    </ob-button-toggle-group>
  `
})
class FalsyButtonTogglesInsideButtonToggleGroupMultipleComponent {
  value: ('' | number | null | undefined | boolean)[] = [0];
  @ViewChildren(ButtonToggleComponent) toggles: QueryList<ButtonToggleComponent>;
}

@Component({
  template: `
    <button ob-button-toggle>Yes</button>
  `
})
class StandaloneButtonToggleComponent {
}

@Component({
  template: `
    <ob-button-toggle-group (change)="lastEvent = $event" value="red">
      <button ob-button-toggle value="red">Value Red</button>
      <button ob-button-toggle value="green">Value Green</button>
    </ob-button-toggle-group>
  `
})
class ButtonToggleGroupWithInitialValueComponent {
  lastEvent: ButtonToggleChange;
}

@Component({
  template: `
    <ob-button-toggle-group [formControl]="control">
      <button ob-button-toggle value="red">Value Red</button>
      <button ob-button-toggle value="green">Value Green</button>
      <button ob-button-toggle value="blue">Value Blue</button>
    </ob-button-toggle-group>
  `
})
class ButtonToggleGroupWithFormControlComponent {
  control = new FormControl();
}

/** Simple test component with an aria-label set. */
@Component({
  template: `
    <button ob-button-toggle aria-label="Super effective"></button>`
})
class ButtonToggleWithAriaLabelComponent {
}

/** Simple test component with an aria-label set. */
@Component({
  template: `
    <button ob-button-toggle aria-labelledby="some-id"></button>`
})
class ButtonToggleWithAriaLabelledbyComponent {
}

@Component({
  template: `
    <button ob-button-toggle tabindex="3"></button>`
})
class ButtonToggleWithTabindexComponent {
}

@Component({
  template: `
    <button ob-button-toggle name="custom-name"></button>`
})
class ButtonToggleWithStaticNameComponent {
}

describe('ButtonToggle with forms', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonToggleModule, FormsModule, ReactiveFormsModule],
      declarations: [
        ButtonToggleGroupWithNgModelComponent,
        ButtonToggleGroupWithFormControlComponent
      ],
    });

    TestBed.compileComponents();
  }));

  describe('using FormControl', () => {
    let fixture: ComponentFixture<ButtonToggleGroupWithFormControlComponent>;
    let groupDebugElement: DebugElement;
    let groupInstance: ButtonToggleGroupComponent;
    let testComponent: ButtonToggleGroupWithFormControlComponent;

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(ButtonToggleGroupWithFormControlComponent);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      groupDebugElement = fixture.debugElement.query(By.directive(ButtonToggleGroupComponent));
      groupInstance = groupDebugElement.injector.get<ButtonToggleGroupComponent>(ButtonToggleGroupComponent);
    }));

    it('should toggle the disabled state', () => {
      testComponent.control.disable();

      expect(groupInstance.disabled).toBe(true);

      testComponent.control.enable();

      expect(groupInstance.disabled).toBe(false);
    });


    it('should set the value', () => {
      testComponent.control.setValue('green');

      expect(groupInstance.value).toBe('green');

      testComponent.control.setValue('red');

      expect(groupInstance.value).toBe('red');
    });

    it('should register the on change callback', () => {
      const spy = jasmine.createSpy('onChange callback');

      testComponent.control.registerOnChange(spy);
      testComponent.control.setValue('blue');

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('button toggle group with ngModel and change event', () => {
    let fixture: ComponentFixture<ButtonToggleGroupWithNgModelComponent>;
    let groupDebugElement: DebugElement;
    let buttonToggleDebugElements: DebugElement[];
    let groupInstance: ButtonToggleGroupComponent;
    let buttonToggleInstances: ButtonToggleComponent[];
    let testComponent: ButtonToggleGroupWithNgModelComponent;
    let groupNgModel: NgModel;
    let innerButtons: HTMLElement[];

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(ButtonToggleGroupWithNgModelComponent);
      fixture.detectChanges();
      testComponent = fixture.debugElement.componentInstance;

      groupDebugElement = fixture.debugElement.query(By.directive(ButtonToggleGroupComponent));
      groupInstance = groupDebugElement.injector.get<ButtonToggleGroupComponent>(ButtonToggleGroupComponent);
      groupNgModel = groupDebugElement.injector.get<NgModel>(NgModel);

      buttonToggleDebugElements = fixture.debugElement.queryAll(By.directive(ButtonToggleComponent));
      buttonToggleInstances = buttonToggleDebugElements.map(debugEl => debugEl.componentInstance);
      innerButtons = groupDebugElement.queryAll(By.css('button')).map(debugEl => debugEl.nativeElement);

      fixture.detectChanges();
    }));

    it('should update the model before firing change event', fakeAsync(() => {
      expect(testComponent.modelValue).toBeUndefined();
      expect(testComponent.lastEvent).toBeUndefined();



      innerButtons[0].click();
      fixture.detectChanges();

      tick();
      expect(testComponent.modelValue).toBe('red');
      expect(testComponent.lastEvent.value).toBe('red');
    }));

    it('should set individual radio names based on the group name', () => {
      expect(groupInstance.name).toBeTruthy();
      for (const buttonToggle of buttonToggleInstances) {
        expect(buttonToggle.name).toBe(groupInstance.name);
      }

      groupInstance.name = 'new name';
      for (const buttonToggle of buttonToggleInstances) {
        expect(buttonToggle.name).toBe(groupInstance.name);
      }
    });

    it('should update the name of radio DOM elements if the name of the group changes', () => {
      expect(innerButtons.every(button => button.getAttribute('name') === groupInstance.name))
        .toBe(true, 'Expected all buttons to have the initial name.');

      fixture.componentInstance.groupName = 'changed-name';
      fixture.detectChanges();

      expect(groupInstance.name).toBe('changed-name');
      expect(innerButtons.every(button => button.getAttribute('name') === groupInstance.name))
        .toBe(true, 'Expected all buttons to have the new name.');
    });

    it('should check the corresponding button toggle on a group value change', () => {
      expect(groupInstance.value).toBeFalsy();
      for (const buttonToggle of buttonToggleInstances) {
        expect(buttonToggle.checked).toBeFalsy();
      }

      groupInstance.value = 'red';
      for (const buttonToggle of buttonToggleInstances) {
        expect(buttonToggle.checked).toBe(groupInstance.value === buttonToggle.value);
      }

      const selected = groupInstance.selected as ButtonToggleComponent;

      expect(selected.value).toBe(groupInstance.value);
    });

    it('should have the correct FormControl state initially and after interaction',
      fakeAsync(() => {
        expect(groupNgModel.valid).toBe(true);
        expect(groupNgModel.pristine).toBe(true);
        expect(groupNgModel.touched).toBe(false);

        buttonToggleInstances[1].checked = true;
        fixture.detectChanges();
        tick();

        expect(groupNgModel.valid).toBe(true);
        expect(groupNgModel.pristine).toBe(true);
        expect(groupNgModel.touched).toBe(false);

        innerButtons[2].click();
        fixture.detectChanges();
        tick();

        expect(groupNgModel.valid).toBe(true);
        expect(groupNgModel.pristine).toBe(false);
        expect(groupNgModel.touched).toBe(true);
      }));

    it('should update the ngModel value when selecting a button toggle', fakeAsync(() => {
      innerButtons[1].click();
      fixture.detectChanges();

      tick();

      expect(testComponent.modelValue).toBe('green');
    }));

    it('should maintain the selected value when swapping out the list of toggles with one ' +
      'that still contains the value', fakeAsync(() => {
      expect(buttonToggleInstances[0].checked).toBe(false);
      expect(fixture.componentInstance.modelValue).toBeFalsy();
      expect(groupInstance.value).toBeFalsy();

      groupInstance.value = 'red';
      fixture.detectChanges();

      expect(buttonToggleInstances[0].checked).toBe(true);
      expect(groupInstance.value).toBe('red');

      fixture.componentInstance.options = [...fixture.componentInstance.options];
      fixture.detectChanges();
      tick();
      fixture.detectChanges();

      buttonToggleDebugElements = fixture.debugElement.queryAll(By.directive(ButtonToggleComponent));
      buttonToggleInstances = buttonToggleDebugElements.map(debugEl => debugEl.componentInstance);

      expect(buttonToggleInstances[0].checked).toBe(true);
      expect(groupInstance.value).toBe('red');
    }));

  });
});

describe('ButtonToggleComponent without forms', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonToggleModule],
      declarations: [
        ButtonTogglesInsideButtonToggleGroupComponent,
        ButtonTogglesInsideButtonToggleGroupMultipleComponent,
        FalsyButtonTogglesInsideButtonToggleGroupMultipleComponent,
        ButtonToggleGroupWithInitialValueComponent,
        StandaloneButtonToggleComponent,
        ButtonToggleWithAriaLabelComponent,
        ButtonToggleWithAriaLabelledbyComponent,
        ButtonToggleWithTabindexComponent,
        ButtonToggleWithStaticNameComponent,
      ],
    });

    TestBed.compileComponents();
  }));

  describe('inside of an exclusive selection group', () => {

    let fixture: ComponentFixture<ButtonTogglesInsideButtonToggleGroupComponent>;
    let groupDebugElement: DebugElement;
    let groupNativeElement: HTMLElement;
    let buttonToggleDebugElements: DebugElement[];
    let buttonToggleNativeElements: HTMLButtonElement[];
    let buttonToggleLabelElements: HTMLButtonElement[];
    let groupInstance: ButtonToggleGroupComponent;
    let buttonToggleInstances: ButtonToggleComponent[];
    let testComponent: ButtonTogglesInsideButtonToggleGroupComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ButtonTogglesInsideButtonToggleGroupComponent);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      groupDebugElement = fixture.debugElement.query(By.directive(ButtonToggleGroupComponent));
      groupNativeElement = groupDebugElement.nativeElement;
      groupInstance = groupDebugElement.injector.get<ButtonToggleGroupComponent>(ButtonToggleGroupComponent);

      buttonToggleDebugElements = fixture.debugElement.queryAll(By.directive(ButtonToggleComponent));

      buttonToggleNativeElements = buttonToggleDebugElements
        .map(debugEl => debugEl.nativeElement);

      buttonToggleLabelElements = fixture.debugElement.queryAll(By.css('button'))
        .map(debugEl => debugEl.nativeElement);

      buttonToggleInstances = buttonToggleDebugElements.map(debugEl => debugEl.componentInstance);
    });

    it('should set individual button toggle names based on the group name', () => {
      expect(groupInstance.name).toBeTruthy();
      for (const buttonToggle of buttonToggleInstances) {
        expect(buttonToggle.name).toBe(groupInstance.name);
      }
    });

    it('should disable click interactions when the group is disabled', () => {
      testComponent.isGroupDisabled = true;
      fixture.detectChanges();

      buttonToggleNativeElements[0].click();
      expect(buttonToggleInstances[0].checked).toBe(false);
      expect(buttonToggleInstances[0].disabled).toBe(true);

      testComponent.isGroupDisabled = false;
      fixture.detectChanges();

      expect(buttonToggleInstances[0].disabled).toBe(false);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();

      expect(buttonToggleInstances[0].checked).toBe(true);
    });

    it('should set aria-disabled based on whether the group is disabled', () => {
      expect(groupNativeElement.getAttribute('aria-disabled')).toBe('false');

      testComponent.isGroupDisabled = true;
      fixture.detectChanges();

      expect(groupNativeElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('should disable the underlying button when the group is disabled', () => {
      const buttons = buttonToggleNativeElements;

      expect(buttons.every(input => input.disabled)).toBe(false);

      testComponent.isGroupDisabled = true;
      fixture.detectChanges();

      expect(buttons.every(input => input.disabled)).toBe(true);
    });

    it('should update the group value when one of the toggles changes', () => {
      expect(groupInstance.value).toBeFalsy();
      buttonToggleLabelElements[0].click();
      fixture.detectChanges();

      expect(groupInstance.value).toBe('test1');
      expect(groupInstance.selected).toBe(buttonToggleInstances[0]);
    });

    it('should propagate the value change back up via a two-way binding', () => {
      expect(groupInstance.value).toBeFalsy();
      buttonToggleLabelElements[0].click();
      fixture.detectChanges();

      expect(groupInstance.value).toBe('test1');
      expect(testComponent.groupValue).toBe('test1');
    });

    it('should update the group and toggles when one of the button toggles is clicked', () => {
      expect(groupInstance.value).toBeFalsy();
      buttonToggleLabelElements[0].click();
      fixture.detectChanges();

      expect(groupInstance.value).toBe('test1');
      expect(groupInstance.selected).toBe(buttonToggleInstances[0]);
      expect(buttonToggleInstances[0].checked).toBe(true);
      expect(buttonToggleInstances[1].checked).toBe(false);

      buttonToggleLabelElements[1].click();
      fixture.detectChanges();

      expect(groupInstance.value).toBe('test2');
      expect(groupInstance.selected).toBe(buttonToggleInstances[1]);
      expect(buttonToggleInstances[0].checked).toBe(false);
      expect(buttonToggleInstances[1].checked).toBe(true);
    });

    it('should check a button toggle upon interaction with underlying native radio button', () => {
      buttonToggleLabelElements[0].click();
      fixture.detectChanges();

      expect(buttonToggleInstances[0].checked).toBe(true);
      expect(groupInstance.value);
    });

    it('should emit a change event from button toggles', fakeAsync(() => {
      expect(buttonToggleInstances[0].checked).toBe(false);

      const changeSpy = jasmine.createSpy('button-toggle change listener');
      buttonToggleInstances[0].change.subscribe(changeSpy);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();
      expect(changeSpy).toHaveBeenCalledTimes(1);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();

      // Always emit change event when button toggle is clicked
      expect(changeSpy).toHaveBeenCalledTimes(2);
    }));

    it('should emit a change event from the button toggle group', fakeAsync(() => {
      expect(groupInstance.value).toBeFalsy();

      const changeSpy = jasmine.createSpy('button-toggle-group change listener');
      groupInstance.change.subscribe(changeSpy);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();
      expect(changeSpy).toHaveBeenCalled();

      buttonToggleLabelElements[1].click();
      fixture.detectChanges();
      tick();
      expect(changeSpy).toHaveBeenCalledTimes(2);
    }));

    it('should update the group and button toggles when updating the group value', () => {
      expect(groupInstance.value).toBeFalsy();

      testComponent.groupValue = 'test1';
      fixture.detectChanges();

      expect(groupInstance.value).toBe('test1');
      expect(groupInstance.selected).toBe(buttonToggleInstances[0]);
      expect(buttonToggleInstances[0].checked).toBe(true);
      expect(buttonToggleInstances[1].checked).toBe(false);

      testComponent.groupValue = 'test2';
      fixture.detectChanges();

      expect(groupInstance.value).toBe('test2');
      expect(groupInstance.selected).toBe(buttonToggleInstances[1]);
      expect(buttonToggleInstances[0].checked).toBe(false);
      expect(buttonToggleInstances[1].checked).toBe(true);
    });

    it('should deselect all of the checkboxes when the group value is cleared', () => {
      buttonToggleInstances[0].checked = true;

      expect(groupInstance.value).toBeTruthy();

      groupInstance.value = null;

      expect(buttonToggleInstances.every(toggle => !toggle.checked)).toBe(true);
    });

    it('should update the model if a selected toggle is removed', fakeAsync(() => {
      expect(groupInstance.value).toBeFalsy();
      buttonToggleLabelElements[0].click();
      fixture.detectChanges();

      expect(groupInstance.value).toBe('test1');
      expect(groupInstance.selected).toBe(buttonToggleInstances[0]);

      testComponent.renderFirstToggle = false;
      fixture.detectChanges();
      tick();

      expect(groupInstance.value).toBeFalsy();
      expect(groupInstance.selected).toBeFalsy();
    }));

  });

  describe('with initial value and change event', () => {

    it('should not fire an initial change event', () => {
      const fixture = TestBed.createComponent(ButtonToggleGroupWithInitialValueComponent);
      const testComponent = fixture.debugElement.componentInstance;
      const groupDebugElement = fixture.debugElement.query(By.directive(ButtonToggleGroupComponent));
      const groupInstance: ButtonToggleGroupComponent = groupDebugElement.injector
        .get<ButtonToggleGroupComponent>(ButtonToggleGroupComponent);

      fixture.detectChanges();

      // Note that we cast to a boolean, because the event has some circular references
      // which will crash the runner when Jasmine attempts to stringify them.
      expect(!!testComponent.lastEvent).toBe(false);
      expect(groupInstance.value).toBe('red');

      groupInstance.value = 'green';
      fixture.detectChanges();

      expect(!!testComponent.lastEvent).toBe(false);
      expect(groupInstance.value).toBe('green');
    });

  });

  describe('inside of a multiple selection group', () => {
    let fixture: ComponentFixture<ButtonTogglesInsideButtonToggleGroupMultipleComponent>;
    let groupDebugElement: DebugElement;
    let groupNativeElement: HTMLElement;
    let buttonToggleDebugElements: DebugElement[];
    let buttonToggleNativeElements: HTMLElement[];
    let buttonToggleLabelElements: HTMLLabelElement[];
    let groupInstance: ButtonToggleGroupComponent;
    let buttonToggleInstances: ButtonToggleComponent[];
    let testComponent: ButtonTogglesInsideButtonToggleGroupMultipleComponent;

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(ButtonTogglesInsideButtonToggleGroupMultipleComponent);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      groupDebugElement = fixture.debugElement.query(By.directive(ButtonToggleGroupComponent));
      groupNativeElement = groupDebugElement.nativeElement;
      groupInstance = groupDebugElement.injector.get<ButtonToggleGroupComponent>(ButtonToggleGroupComponent);

      buttonToggleDebugElements = fixture.debugElement.queryAll(By.directive(ButtonToggleComponent));
      buttonToggleNativeElements = buttonToggleDebugElements
        .map(debugEl => debugEl.nativeElement);
      buttonToggleLabelElements = buttonToggleDebugElements
        .map(debugEl => debugEl.nativeElement);
      buttonToggleInstances = buttonToggleDebugElements.map(debugEl => debugEl.componentInstance);
    }));

    it('should disable click interactions when the group is disabled', () => {
      testComponent.isGroupDisabled = true;
      fixture.detectChanges();

      buttonToggleNativeElements[0].click();
      expect(buttonToggleInstances[0].checked).toBe(false);
    });

    it('should check a button toggle when clicked', () => {
      expect(buttonToggleInstances.every(buttonToggle => !buttonToggle.checked)).toBe(true);

      const nativeCheckboxLabel = buttonToggleDebugElements[0].nativeElement;

      nativeCheckboxLabel.click();

      expect(groupInstance.value).toEqual(['eggs']);
      expect(buttonToggleInstances[0].checked).toBe(true);
    });

    it('should allow for multiple toggles to be selected', () => {
      buttonToggleInstances[0].checked = true;
      fixture.detectChanges();

      expect(groupInstance.value).toEqual(['eggs']);
      expect(buttonToggleInstances[0].checked).toBe(true);

      buttonToggleInstances[1].checked = true;
      fixture.detectChanges();

      expect(groupInstance.value).toEqual(['eggs', 'flour']);
      expect(buttonToggleInstances[1].checked).toBe(true);
      expect(buttonToggleInstances[0].checked).toBe(true);
    });

    it('should check a button toggle upon interaction with underlying native checkbox', () => {
      const nativeCheckboxButton = buttonToggleDebugElements[0].nativeElement;

      nativeCheckboxButton.click();
      fixture.detectChanges();

      expect(groupInstance.value).toEqual(['eggs']);
      expect(buttonToggleInstances[0].checked).toBe(true);
    });

    it('should deselect a button toggle when selected twice', fakeAsync(() => {
      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();

      expect(buttonToggleInstances[0].checked).toBe(true);
      expect(groupInstance.value).toEqual(['eggs']);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();

      expect(groupInstance.value).toEqual([]);
      expect(buttonToggleInstances[0].checked).toBe(false);
    }));

    it('should emit a change event for state changes', fakeAsync(() => {
      expect(buttonToggleInstances[0].checked).toBe(false);

      const changeSpy = jasmine.createSpy('button-toggle change listener');
      buttonToggleInstances[0].change.subscribe(changeSpy);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();
      expect(changeSpy).toHaveBeenCalled();
      expect(groupInstance.value).toEqual(['eggs']);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();
      expect(groupInstance.value).toEqual([]);

      // The default browser behavior is to emit an event, when the value was set
      // to false. That's because the current input type is set to `checkbox` when
      // using the multiple mode.
      expect(changeSpy).toHaveBeenCalledTimes(2);
    }));

    it('should throw when attempting to assign a non-array value', () => {
      expect(() => {
        groupInstance.value = 'not-an-array';
      }).toThrowError(/Value must be an array/);
    });
  });

  describe('as standalone', () => {
    let fixture: ComponentFixture<StandaloneButtonToggleComponent>;
    let buttonToggleDebugElement: DebugElement;
    let buttonToggleNativeElement: HTMLElement;
    let buttonToggleLabelElement: HTMLLabelElement;
    let buttonToggleInstance: ButtonToggleComponent;
    let buttonToggleButtonElement: HTMLButtonElement;

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(StandaloneButtonToggleComponent);
      fixture.detectChanges();

      buttonToggleDebugElement = fixture.debugElement.query(By.directive(ButtonToggleComponent));
      buttonToggleNativeElement = buttonToggleDebugElement.nativeElement;
      buttonToggleLabelElement = buttonToggleNativeElement as HTMLLabelElement;
      buttonToggleInstance = buttonToggleDebugElement.componentInstance;

      buttonToggleButtonElement = buttonToggleNativeElement as HTMLButtonElement; // tslint:disable-line:no-non-null-assertion
    }));

    it('should toggle when clicked', fakeAsync(() => {
      buttonToggleLabelElement.click();
      fixture.detectChanges();
      flush();

      expect(buttonToggleInstance.checked).toBe(true);

      buttonToggleLabelElement.click();
      fixture.detectChanges();
      flush();

      expect(buttonToggleInstance.checked).toBe(false);
    }));

    it('should emit a change event for state changes', fakeAsync(() => {

      expect(buttonToggleInstance.checked).toBe(false);

      const changeSpy = jasmine.createSpy('button-toggle change listener');
      buttonToggleInstance.change.subscribe(changeSpy);

      buttonToggleLabelElement.click();
      fixture.detectChanges();
      tick();
      expect(changeSpy).toHaveBeenCalled();

      buttonToggleLabelElement.click();
      fixture.detectChanges();
      tick();

      // The default browser behavior is to emit an event, when the value was set
      // to false. That's because the current input type is set to `checkbox`.
      expect(changeSpy).toHaveBeenCalledTimes(2);
    }));

    it('should focus on underlying input element when focus() is called', () => {
      const nativeButton = buttonToggleDebugElement.nativeElement;
      expect(document.activeElement).not.toBe(nativeButton);

      buttonToggleInstance.focus();
      fixture.detectChanges();

      expect(document.activeElement).toBe(nativeButton);
    });

    it('should not assign a name to the underlying input if one is not passed in', () => {
      expect(buttonToggleButtonElement.getAttribute('name')).toBeFalsy();
    });

    it('should have correct aria-pressed attribute', () => {
      expect(buttonToggleButtonElement.getAttribute('aria-pressed'))
        .toBe('false');

      buttonToggleLabelElement.click();

      fixture.detectChanges();

      expect(buttonToggleButtonElement.getAttribute('aria-pressed'))
        .toBe('true');
    });
  });

  describe('aria-label handling ', () => {
    it('should not set the aria-label attribute if none is provided', () => {
      const fixture = TestBed.createComponent(StandaloneButtonToggleComponent);
      const checkboxDebugElement = fixture.debugElement.query(By.directive(ButtonToggleComponent));
      const checkboxNativeElement = checkboxDebugElement.nativeElement;
      const buttonElement = checkboxNativeElement as HTMLButtonElement;

      fixture.detectChanges();
      expect(buttonElement.hasAttribute('aria-label')).toBe(false);
    });

    it('should use the provided aria-label', () => {
      const fixture = TestBed.createComponent(ButtonToggleWithAriaLabelComponent);
      const checkboxDebugElement = fixture.debugElement.query(By.directive(ButtonToggleComponent));
      const checkboxNativeElement = checkboxDebugElement.nativeElement;
      const buttonElement = checkboxNativeElement as HTMLButtonElement;

      fixture.detectChanges();
      expect(buttonElement.getAttribute('aria-label')).toBe('Super effective');
    });
  });

  describe('with provided aria-labelledby ', () => {
    let checkboxDebugElement: DebugElement;
    let checkboxNativeElement: HTMLElement;

    it('should use the provided aria-labelledby', () => {
      const fixture = TestBed.createComponent(ButtonToggleWithAriaLabelledbyComponent);
      checkboxDebugElement = fixture.debugElement.query(By.directive(ButtonToggleComponent));
      checkboxNativeElement = checkboxDebugElement.nativeElement;

      fixture.detectChanges();
      expect(checkboxNativeElement.getAttribute('aria-labelledby')).toBe('some-id');
    });

    it('should not assign aria-labelledby if none is provided', () => {
      const fixture = TestBed.createComponent(StandaloneButtonToggleComponent);
      checkboxDebugElement = fixture.debugElement.query(By.directive(ButtonToggleComponent));
      checkboxNativeElement = checkboxDebugElement.nativeElement;

      fixture.detectChanges();
      expect(checkboxNativeElement.getAttribute('aria-labelledby')).toBe(null);
    });
  });

  describe('with tabindex', () => {
    it('should forward the tabindex to the underlying button', () => {
      const fixture = TestBed.createComponent(ButtonToggleWithTabindexComponent);
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.directive(ButtonToggleComponent)).nativeElement;

      expect(button.getAttribute('tabindex')).toBe('3');
    });

  });



  it('should not throw on init when toggles are repeated and there is an initial value', () => {
    const fixture = TestBed.createComponent(ButtonToggleWithStaticNameComponent);
    fixture.detectChanges();

    const hostNode: HTMLElement = fixture.debugElement.query(By.directive(ButtonToggleComponent)).nativeElement;

    expect(hostNode.getAttribute('name')).toBe('custom-name');
  });


  it('should select falsy button toggle value in multiple selection', () => {
    const fixture = TestBed.createComponent(FalsyButtonTogglesInsideButtonToggleGroupMultipleComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.toggles.toArray()[0].checked).toBe(true);
    expect(fixture.componentInstance.toggles.toArray()[1].checked).toBe(false);
    expect(fixture.componentInstance.toggles.toArray()[2].checked).toBe(false);

    fixture.componentInstance.value = [0, false];
    fixture.detectChanges();

    expect(fixture.componentInstance.toggles.toArray()[0].checked).toBe(true);
    expect(fixture.componentInstance.toggles.toArray()[1].checked).toBe(false);
    expect(fixture.componentInstance.toggles.toArray()[2].checked).toBe(true);
  });

  it('should not throw if initial value is set during creation', () => {
    const fixture = TestBed.createComponent(ButtonTogglesInsideButtonToggleGroupMultipleComponent);

    // In Ivy static inputs are set during creation. We simulate this by not calling
    // `fixture.detectChanges` immediately, but getting a hold of the instance via the
    // DebugElement and setting the value ourselves.
    expect(() => {
      const toggle = fixture.debugElement.query(By.directive(ButtonToggleComponent)).componentInstance;
      toggle.checked = true;
      fixture.detectChanges();
    }).not.toThrow();
  });

});

