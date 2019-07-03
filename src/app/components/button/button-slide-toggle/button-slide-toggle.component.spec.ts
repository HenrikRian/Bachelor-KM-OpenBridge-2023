import {BidiModule} from '@angular/cdk/bidi';
import {Component} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {By, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {ButtonSlideToggleComponent, ObButtonSlideToggleChange} from './button-slide-toggle.component';


describe('ButtonSlideToggle without forms', () => {
  /*let gestureConfig: TestGestureConfig;
  let mutationObserverCallbacks: Function[];
  let flushMutationObserver = () => mutationObserverCallbacks.forEach(callback => callback());
*/
  const checkedClass = 'ob-selected';

  beforeEach(fakeAsync(() => {
    //  mutationObserverCallbacks = [];

    TestBed.configureTestingModule({
      imports: [BidiModule],
      declarations: [
        ButtonSlideToggleComponent,
        SlideToggleBasicComponent,
        SlideToggleWithTabindexAttrComponent,
        SlideToggleWithoutLabelComponent,
        SlideToggleProjectedLabelComponent,
        TextBindingComponent,
      ],
    });

    TestBed.compileComponents();
  }));

  describe('basic behavior', () => {
    let fixture: ComponentFixture<any>;

    let testComponent: SlideToggleBasicComponent;
    let slideToggle: ButtonSlideToggleComponent;
    let slideToggleElement: HTMLElement;
    let slideToggleDivElement: HTMLElement;
    let labelElement: HTMLLabelElement;
    let inputElement: HTMLInputElement;

    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(SlideToggleBasicComponent);

      // Enable jasmine spies on event functions, which may trigger at initialization
      // of the slide-toggle component.
      spyOn(fixture.debugElement.componentInstance, 'onSlideChange').and.callThrough();

      // Initialize the slide-toggle component, by triggering the first change detection cycle.
      fixture.detectChanges();

      const slideToggleDebug = fixture.debugElement.children[0];

      testComponent = fixture.debugElement.componentInstance;
      slideToggle = slideToggleDebug.componentInstance;
      slideToggleElement = slideToggleDebug.nativeElement;
      slideToggleDivElement = fixture.debugElement.query(By.css('.ob-slide-toggle')).nativeElement;
      inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      labelElement = fixture.debugElement.query(By.css('label')).nativeElement;
    }));

    function expectCheckedClassToBeExcluded() {
      expect(slideToggleDivElement.classList).not.toContain(checkedClass);
    }

    function expectCheckedClassToBeIncluded() {
      expect(slideToggleDivElement.classList).toContain(checkedClass);
    }

    it('should correctly update the disabled property', () => {
      expect(inputElement.disabled).toBeFalsy();

      testComponent.isDisabled = true;
      fixture.detectChanges();

      expect(inputElement.disabled).toBeTruthy();
    });

    it('should correctly update the checked property', () => {
      expect(slideToggle.checked).toBeFalsy();
      expect(inputElement.getAttribute('aria-checked')).toBe('false');

      testComponent.slideChecked = true;
      fixture.detectChanges();

      expect(inputElement.checked).toBeTruthy();
      expect(inputElement.getAttribute('aria-checked')).toBe('true');
    });



    it('should set the toggle to checked on click', () => {
      expect(slideToggle.checked).toBe(false);
      expect(inputElement.getAttribute('aria-checked')).toBe('false');
      expectCheckedClassToBeExcluded();

      labelElement.click();
      fixture.detectChanges();

      expectCheckedClassToBeIncluded();
      expect(slideToggle.checked).toBe(true);
      expect(inputElement.getAttribute('aria-checked')).toBe('true');
    });

    it('should trigger the change event properly', () => {
      expect(inputElement.checked).toBe(false);
      expectCheckedClassToBeExcluded();

      labelElement.click();
      fixture.detectChanges();

      expect(inputElement.checked).toBe(true);
      expectCheckedClassToBeIncluded();
      expect(testComponent.onSlideChange).toHaveBeenCalledTimes(1);
    });

    it('should not trigger the change event by changing the native value', fakeAsync(() => {
      expect(inputElement.checked).toBe(false);
      expectCheckedClassToBeExcluded();

      testComponent.slideChecked = true;
      fixture.detectChanges();

      expect(inputElement.checked).toBe(true);
      expectCheckedClassToBeIncluded();
      tick();

      expect(testComponent.onSlideChange).not.toHaveBeenCalled();
    }));

    it('should not trigger the change event on initialization', fakeAsync(() => {
      expect(inputElement.checked).toBe(false);
      expectCheckedClassToBeExcluded();

      testComponent.slideChecked = true;
      fixture.detectChanges();

      expect(inputElement.checked).toBe(true);
      expectCheckedClassToBeIncluded();
      tick();

      expect(testComponent.onSlideChange).not.toHaveBeenCalled();
    }));

    it('should add a suffix to the inputs id', () => {
      testComponent.slideId = 'myId';
      fixture.detectChanges();

      expect(slideToggleElement.id).toBe('myId');
      expect(inputElement.id).toBe(`${slideToggleElement.id}-input`);

      testComponent.slideId = 'nextId';
      fixture.detectChanges();

      expect(slideToggleElement.id).toBe('nextId');
      expect(inputElement.id).toBe(`${slideToggleElement.id}-input`);

      testComponent.slideId = null;
      fixture.detectChanges();

      // Once the id binding is set to null, the id property should auto-generate a unique id.
      expect(inputElement.id).toMatch(/ob-slide-toggle-\d+-input/);
    });

    it('should forward the tabIndex to the underlying input', () => {
      fixture.detectChanges();

      expect(inputElement.tabIndex).toBe(0);

      testComponent.slideTabindex = 4;
      fixture.detectChanges();

      expect(inputElement.tabIndex).toBe(4);
    });

    it('should forward the specified name to the input', () => {
      testComponent.slideName = 'myName';
      fixture.detectChanges();

      expect(inputElement.name).toBe('myName');

      testComponent.slideName = 'nextName';
      fixture.detectChanges();

      expect(inputElement.name).toBe('nextName');

      testComponent.slideName = null;
      fixture.detectChanges();

      expect(inputElement.name).toBe('');
    });

    it('should forward the aria-label attribute to the input', () => {
      testComponent.slideLabel = 'ariaLabel';
      fixture.detectChanges();

      expect(inputElement.getAttribute('aria-label')).toBe('ariaLabel');

      testComponent.slideLabel = null;
      fixture.detectChanges();

      expect(inputElement.hasAttribute('aria-label')).toBeFalsy();
    });

    it('should forward the aria-labelledby attribute to the input', () => {
      testComponent.slideLabelledBy = 'ariaLabelledBy';
      fixture.detectChanges();

      expect(inputElement.getAttribute('aria-labelledby')).toBe('ariaLabelledBy');

      testComponent.slideLabelledBy = null;
      fixture.detectChanges();

      expect(inputElement.hasAttribute('aria-labelledby')).toBeFalsy();
    });

    it('should set the `for` attribute to the id of the input element', () => {
      expect(labelElement.getAttribute('for')).toBeTruthy();
      expect(inputElement.getAttribute('id')).toBeTruthy();
      expect(labelElement.getAttribute('for')).toBe(inputElement.getAttribute('id'));
    });

    it('should emit the new values properly', fakeAsync(() => {
      labelElement.click();
      fixture.detectChanges();
      tick();

      // We're checking the arguments type / emitted value to be a boolean, because sometimes the
      // emitted value can be a DOM Event, which is not valid.
      // See angular/angular#4059
      expect(testComponent.lastEvent.checked).toBe(true);
    }));

    it('should support subscription on the change observable', fakeAsync(() => {
      const spy = jasmine.createSpy('change spy');
      const subscription = slideToggle.change.subscribe(spy);

      labelElement.click();
      fixture.detectChanges();
      tick();

      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({checked: true}));
      subscription.unsubscribe();
    }));

    it('should forward the required attribute', () => {
      testComponent.isRequired = true;
      fixture.detectChanges();

      expect(inputElement.required).toBe(true);

      testComponent.isRequired = false;
      fixture.detectChanges();

      expect(inputElement.required).toBe(false);
    });

    it('should focus on underlying input element when focus() is called', () => {
      expect(document.activeElement).not.toBe(inputElement);

      slideToggle.focus();
      fixture.detectChanges();

      expect(document.activeElement).toBe(inputElement);
    });

    it('should focus on underlying input element when the host is focused', () => {
      expect(document.activeElement).not.toBe(inputElement);

      slideToggleElement.focus();
      fixture.detectChanges();

      expect(document.activeElement).toBe(inputElement);
    });
  /*
    it('should show ripples on label mousedown', () => {
      const rippleSelector = '.mat-ripple-element:not(.mat-slide-toggle-persistent-ripple)';

      expect(slideToggleElement.querySelectorAll(rippleSelector).length).toBe(0);

      dispatchFakeEvent(labelElement, 'mousedown');
      dispatchFakeEvent(labelElement, 'mouseup');

      expect(slideToggleElement.querySelectorAll(rippleSelector).length).toBe(1);
    });

    it('should not show ripples when disableRipple is set', () => {
      const rippleSelector = '.mat-ripple-element:not(.mat-slide-toggle-persistent-ripple)';
      testComponent.disableRipple = true;
      fixture.detectChanges();

      expect(slideToggleElement.querySelectorAll(rippleSelector).length).toBe(0);

      dispatchFakeEvent(labelElement, 'mousedown');
      dispatchFakeEvent(labelElement, 'mouseup');

      expect(slideToggleElement.querySelectorAll(rippleSelector).length).toBe(0);
    });
    */
  });

  /*
  describe('custom template', () => {
    it('should not trigger the change event on initialization', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleBasic);

      fixture.componentInstance.slideChecked = true;
      fixture.detectChanges();

      expect(fixture.componentInstance.lastEvent).toBeFalsy();
    }));

    it('should be able to set the tabindex via the native attribute', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleWithTabindexAttr);

      fixture.detectChanges();

      const slideToggle = fixture.debugElement
        .query(By.directive(MatSlideToggle)).componentInstance as MatSlideToggle;

      expect(slideToggle.tabIndex)
        .toBe(5, 'Expected tabIndex property to have been set based on the native attribute');
    }));

    it('should set the tabindex of the host element to -1', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleWithTabindexAttr);

      fixture.detectChanges();

      const slideToggle = fixture.debugElement.query(By.directive(MatSlideToggle)).nativeElement;
      expect(slideToggle.getAttribute('tabindex')).toBe('-1');
    }));

    it('should remove the tabindex from the host element when disabled', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleWithTabindexAttr);

      fixture.componentInstance.disabled = true;
      fixture.detectChanges();

      const slideToggle = fixture.debugElement.query(By.directive(MatSlideToggle)).nativeElement;
      expect(slideToggle.hasAttribute('tabindex')).toBe(false);
    }));
  });

  describe('custom action configuration', () => {
    it('should not change value on click when click action is noop', fakeAsync(() => {
      TestBed
        .resetTestingModule()
        .configureTestingModule({
          imports: [MatSlideToggleModule],
          declarations: [SlideToggleBasic],
          providers: [
            {
              provide: HAMMER_GESTURE_CONFIG,
              useFactory: () => gestureConfig = new TestGestureConfig()
            },
            {provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, useValue: {disableToggleValue: true}},
          ]
        });
      const fixture = TestBed.createComponent(SlideToggleBasic);
      fixture.detectChanges();

      const testComponent = fixture.debugElement.componentInstance;
      const slideToggleDebug = fixture.debugElement.query(By.css('mat-slide-toggle'));

      const slideToggle = slideToggleDebug.componentInstance;
      const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const labelElement = fixture.debugElement.query(By.css('label')).nativeElement;

      expect(testComponent.toggleTriggered).toBe(0);
      expect(testComponent.dragTriggered).toBe(0);
      expect(slideToggle.checked).toBe(false, 'Expect slide toggle value not changed');

      labelElement.click();
      fixture.detectChanges();

      expect(slideToggle.checked).toBe(false, 'Expect slide toggle value not changed');
      expect(testComponent.toggleTriggered).toBe(1, 'Expect toggle once');
      expect(testComponent.dragTriggered).toBe(0);

      inputElement.click();
      fixture.detectChanges();

      expect(slideToggle.checked).toBe(false, 'Expect slide toggle value not changed');
      expect(testComponent.toggleTriggered).toBe(2, 'Expect toggle twice');
      expect(testComponent.dragTriggered).toBe(0);
    }));

    it('should not change value on dragging when drag action is noop', fakeAsync(() => {
      TestBed
        .resetTestingModule()
        .configureTestingModule({
          imports: [MatSlideToggleModule],
          declarations: [SlideToggleBasic],
          providers: [
            {
              provide: HAMMER_GESTURE_CONFIG,
              useFactory: () => gestureConfig = new TestGestureConfig()
            },
            {provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, useValue: {disableDragValue: true}},
          ]
        });
      const fixture = TestBed.createComponent(SlideToggleBasic);
      fixture.detectChanges();

      const testComponent = fixture.debugElement.componentInstance;
      const slideToggleDebug = fixture.debugElement.query(By.css('mat-slide-toggle'));
      const thumbContainerDebug = slideToggleDebug
        .query(By.css('.mat-slide-toggle-thumb-container'));

      const slideThumbContainer = thumbContainerDebug.nativeElement;
      const slideToggle = slideToggleDebug.componentInstance;

      expect(testComponent.toggleTriggered).toBe(0);
      expect(testComponent.dragTriggered).toBe(0);
      expect(slideToggle.checked).toBe(false);

      gestureConfig.emitEventForElement('slidestart', slideThumbContainer);
      tick();

      expect(slideThumbContainer.classList).toContain('mat-dragging');

      gestureConfig.emitEventForElement('slide', slideThumbContainer, {
        deltaX: 200 // Arbitrary, large delta that will be clamped to the end of the slide-toggle.
      });

      gestureConfig.emitEventForElement('slideend', slideThumbContainer);

      // Flush the timeout for the slide ending.
      tick();

      expect(slideToggle.checked).toBe(false, 'Expect slide toggle value not changed');
      expect(slideThumbContainer.classList).not.toContain('mat-dragging');
      expect(testComponent.lastEvent).toBeUndefined();
      expect(testComponent.toggleTriggered).toBe(0);
      expect(testComponent.dragTriggered).toBe(1, 'Expect drag once');
    }));
  });


  describe('without label', () => {
    let fixture: ComponentFixture<SlideToggleWithoutLabel>;
    let testComponent: SlideToggleWithoutLabel;
    let slideToggleBarElement: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SlideToggleWithoutLabel);

      const slideToggleDebugEl = fixture.debugElement.query(By.directive(MatSlideToggle));

      testComponent = fixture.componentInstance;
      slideToggleBarElement = slideToggleDebugEl
        .query(By.css('.mat-slide-toggle-bar')).nativeElement;
    });

    it('should remove margin for slide-toggle without a label', () => {
      fixture.detectChanges();

      expect(slideToggleBarElement.classList)
        .toContain('mat-slide-toggle-bar-no-side-margin');
    });

    it('should not remove margin if initial label is set through binding', fakeAsync(() => {
      testComponent.label = 'Some content';
      fixture.detectChanges();

      expect(slideToggleBarElement.classList)
        .not.toContain('mat-slide-toggle-bar-no-side-margin');
    }));

    it('should re-add margin if label is added asynchronously', fakeAsync(() => {
      fixture.detectChanges();

      expect(slideToggleBarElement.classList)
        .toContain('mat-slide-toggle-bar-no-side-margin');

      testComponent.label = 'Some content';
      fixture.detectChanges();
      flushMutationObserver();
      fixture.detectChanges();

      expect(slideToggleBarElement.classList)
        .not.toContain('mat-slide-toggle-bar-no-side-margin');
    }));
  });

  describe('label margin', () => {
    let fixture: ComponentFixture<SlideToggleProjectedLabel>;
    let slideToggleBarElement: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SlideToggleProjectedLabel);
      slideToggleBarElement = fixture.debugElement
        .query(By.css('.mat-slide-toggle-bar')).nativeElement;

      fixture.detectChanges();
    });

    it('should properly update margin if label content is projected', () => {
      // Do not run the change detection for the fixture manually because we want to verify
      // that the slide-toggle properly toggles the margin class even if the observe content
      // output fires outside of the zone.
      flushMutationObserver();

      expect(slideToggleBarElement.classList).not
        .toContain('mat-slide-toggle-bar-no-side-margin');
    });
  });
  */
});

/*
describe('MatSlideToggle with forms', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSlideToggleModule, FormsModule, ReactiveFormsModule],
      declarations: [
        SlideToggleWithForm,
        SlideToggleWithModel,
        SlideToggleWithFormControl,
        SlideToggleWithModelAndChangeEvent,
      ]
    });

    TestBed.compileComponents();
  }));

  describe('using ngModel', () => {
    let fixture: ComponentFixture<SlideToggleWithModel>;

    let testComponent: SlideToggleWithModel;
    let slideToggle: MatSlideToggle;
    let slideToggleElement: HTMLElement;
    let slideToggleModel: NgModel;
    let inputElement: HTMLInputElement;
    let labelElement: HTMLLabelElement;

    // This initialization is async() because it needs to wait for ngModel to set the initial value.
    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(SlideToggleWithModel);
      fixture.detectChanges();

      const slideToggleDebug = fixture.debugElement.query(By.directive(MatSlideToggle));

      testComponent = fixture.debugElement.componentInstance;
      slideToggle = slideToggleDebug.componentInstance;
      slideToggleElement = slideToggleDebug.nativeElement;
      slideToggleModel = slideToggleDebug.injector.get<NgModel>(NgModel);
      inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      labelElement = fixture.debugElement.query(By.css('label')).nativeElement;
    }));

    it('should be initially set to ng-pristine', () => {
      expect(slideToggleElement.classList).toContain('ng-pristine');
      expect(slideToggleElement.classList).not.toContain('ng-dirty');
    });

    it('should update the model programmatically', fakeAsync(() => {
      expect(slideToggleElement.classList).not.toContain(checkedClass);

      testComponent.modelValue = true;
      fixture.detectChanges();

      // Flush the microtasks because the forms module updates the model state asynchronously.
      flushMicrotasks();

      fixture.detectChanges();
      expect(slideToggleElement.classList).toContain(checkedClass);
    }));

    it('should have the correct control state initially and after interaction', fakeAsync(() => {
      // The control should start off valid, pristine, and untouched.
      expect(slideToggleModel.valid).toBe(true);
      expect(slideToggleModel.pristine).toBe(true);
      expect(slideToggleModel.touched).toBe(false);

      // After changing the value from the view, the control should
      // become dirty (not pristine), but remain untouched if focus is still there.
      slideToggle.checked = true;

      // Dispatch a change event on the input element to fake a user interaction that triggered
      // the state change.
      dispatchFakeEvent(inputElement, 'change');

      expect(slideToggleModel.valid).toBe(true);
      expect(slideToggleModel.pristine).toBe(false);
      expect(slideToggleModel.touched).toBe(false);

      // Once the input element loses focus, the control should remain dirty but should
      // also turn touched.
      dispatchFakeEvent(inputElement, 'blur');
      fixture.detectChanges();
      flushMicrotasks();

      expect(slideToggleModel.valid).toBe(true);
      expect(slideToggleModel.pristine).toBe(false);
      expect(slideToggleModel.touched).toBe(true);
    }));

    it('should not throw an error when disabling while focused', fakeAsync(() => {
      expect(() => {
        // Focus the input element because after disabling, the `blur` event should automatically
        // fire and not result in a changed after checked exception. Related: #12323
        inputElement.focus();

        // Flush the two nested timeouts from the FocusMonitor that are being created on `focus`.
        flush();

        slideToggle.disabled = true;
        fixture.detectChanges();
        flushMicrotasks();
      }).not.toThrow();
    }));

    it('should not set the control to touched when changing the state programmatically',
        fakeAsync(() => {

      // The control should start off with being untouched.
      expect(slideToggleModel.touched).toBe(false);

      slideToggle.checked = true;
      fixture.detectChanges();

      expect(slideToggleModel.touched).toBe(false);
      expect(slideToggleElement.classList).toContain(checkedClass);

      // Once the input element loses focus, the control should remain dirty but should
      // also turn touched.
      dispatchFakeEvent(inputElement, 'blur');
      fixture.detectChanges();
      flushMicrotasks();

      expect(slideToggleModel.touched).toBe(true);
      expect(slideToggleElement.classList).toContain(checkedClass);
    }));

    it('should not set the control to touched when changing the model', fakeAsync(() => {
      // The control should start off with being untouched.
      expect(slideToggleModel.touched).toBe(false);

      testComponent.modelValue = true;
      fixture.detectChanges();

      // Flush the microtasks because the forms module updates the model state asynchronously.
      flushMicrotasks();

      // The checked property has been updated from the model and now the view needs
      // to reflect the state change.
      fixture.detectChanges();

      expect(slideToggleModel.touched).toBe(false);
      expect(slideToggle.checked).toBe(true);
      expect(slideToggleElement.classList).toContain(checkedClass);
    }));

    it('should update checked state on click if control is checked initially', fakeAsync(() => {
      fixture = TestBed.createComponent(SlideToggleWithModel);
      slideToggle = fixture.debugElement.query(By.directive(MatSlideToggle)).componentInstance;
      labelElement = fixture.debugElement.query(By.css('label')).nativeElement;

      fixture.componentInstance.modelValue = true;
      fixture.detectChanges();

      // Flush the microtasks because the forms module updates the model state asynchronously.
      flushMicrotasks();

      // Now the new checked variable has been updated in the slide-toggle and the slide-toggle
      // is marked for check because it still needs to update the underlying input.
      fixture.detectChanges();

      expect(slideToggle.checked)
        .toBe(true, 'Expected slide-toggle to be checked initially');

      labelElement.click();
      fixture.detectChanges();
      tick();

      expect(slideToggle.checked)
        .toBe(false, 'Expected slide-toggle to be no longer checked after label click.');
    }));

    it('should be pristine if initial value is set from NgModel', fakeAsync(() => {
      fixture = TestBed.createComponent(SlideToggleWithModel);

      fixture.componentInstance.modelValue = true;
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.directive(MatSlideToggle));
      const modelInstance = debugElement.injector.get<NgModel>(NgModel);

      // Flush the microtasks because the forms module updates the model state asynchronously.
      flushMicrotasks();

      expect(modelInstance.pristine).toBe(true);
    }));

    it('should set the model value when toggling via the `toggle` method', fakeAsync(() => {
      expect(testComponent.modelValue).toBe(false);

      fixture.debugElement.query(By.directive(MatSlideToggle)).componentInstance.toggle();
      fixture.detectChanges();
      flushMicrotasks();

      fixture.detectChanges();
      expect(testComponent.modelValue).toBe(true);
    }));

  });

  describe('with a FormControl', () => {
    let fixture: ComponentFixture<SlideToggleWithFormControl>;

    let testComponent: SlideToggleWithFormControl;
    let slideToggle: MatSlideToggle;
    let inputElement: HTMLInputElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SlideToggleWithFormControl);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;
      slideToggle = fixture.debugElement.query(By.directive(MatSlideToggle)).componentInstance;
      inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    });

    it('should toggle the disabled state', () => {
      expect(slideToggle.disabled).toBe(false);
      expect(inputElement.disabled).toBe(false);

      testComponent.formControl.disable();
      fixture.detectChanges();

      expect(slideToggle.disabled).toBe(true);
      expect(inputElement.disabled).toBe(true);

      testComponent.formControl.enable();
      fixture.detectChanges();

      expect(slideToggle.disabled).toBe(false);
      expect(inputElement.disabled).toBe(false);
    });
  });

  describe('with form element', () => {
    let fixture: ComponentFixture<any>;
    let testComponent: SlideToggleWithForm;
    let buttonElement: HTMLButtonElement;
    let inputElement: HTMLInputElement;

    // This initialization is async() because it needs to wait for ngModel to set the initial value.
    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(SlideToggleWithForm);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;
      buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
      inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    }));

    it('should prevent the form from submit when being required', () => {
      if (typeof (inputElement as any).reportValidity === 'undefined') {
        // If the browser does not report the validity then the tests will break.
        // e.g Safari 8 on Mobile.
        return;
      }

      testComponent.isRequired = true;

      fixture.detectChanges();

      buttonElement.click();
      fixture.detectChanges();

      expect(testComponent.isSubmitted).toBe(false);

      testComponent.isRequired = false;
      fixture.detectChanges();

      buttonElement.click();
      fixture.detectChanges();

      expect(testComponent.isSubmitted).toBe(true);
    });
  });

  describe('with model and change event', () => {
    it('should report changes to NgModel before emitting change event', () => {
      const fixture = TestBed.createComponent(SlideToggleWithModelAndChangeEvent);
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label')).nativeElement;

      spyOn(fixture.componentInstance, 'onChange').and.callFake(() => {
        expect(fixture.componentInstance.checked)
          .toBe(true, 'Expected the model value to have changed before the change event fired.');
      });

      labelEl.click();

      expect(fixture.componentInstance.onChange).toHaveBeenCalledTimes(1);
    });
  });
});
*/

@Component({
  template: `
    <ob-slide-toggle
      [required]="isRequired"
      [disabled]="isDisabled"
      [id]="slideId"
      [checked]="slideChecked"
      [name]="slideName"
      [aria-label]="slideLabel"
      [aria-labelledby]="slideLabelledBy"
      [tabIndex]="slideTabindex"
      (change)="onSlideChange($event)">
      <span>Test Slide Toggle</span>
    </ob-slide-toggle>`,
})
class SlideToggleBasicComponent {
  isDisabled = false;
  isRequired = false;
  slideChecked = false;
  slideId: string | null;
  slideName: string | null;
  slideLabel: string | null;
  slideLabelledBy: string | null;
  slideTabindex: number;
  lastEvent: ObButtonSlideToggleChange;

  onSlideChange = (event: ObButtonSlideToggleChange) => this.lastEvent = event;
}

@Component({
  template: `
    <form ngNativeValidate (ngSubmit)="isSubmitted = true">
      <ob-slide-toggle name="slide" ngModel [required]="isRequired">Required</ob-slide-toggle>
      <button type="submit"></button>
    </form>`
})
class SlideToggleWithFormComponent {
  isSubmitted = false;
  isRequired = false;
}

@Component({
  template: `
    <ob-slide-toggle [(ngModel)]="modelValue"></ob-slide-toggle>`
})
class SlideToggleWithModelComponent {
  modelValue = false;
}

@Component({
  template: `
    <ob-slide-toggle [formControl]="formControl">
      <span>Test Slide Toggle</span>
    </ob-slide-toggle>`,
})
class SlideToggleWithFormControlComponent {
  formControl = new FormControl();
}

@Component({
  template: `
    <ob-slide-toggle tabindex="5" [disabled]="disabled"></ob-slide-toggle>`
})
class SlideToggleWithTabindexAttrComponent {
  disabled = false;
}

@Component({
  template: `
    <ob-slide-toggle>{{label}}</ob-slide-toggle>`
})
class SlideToggleWithoutLabelComponent {
  label: string;
}

@Component({
  template: `
    <ob-slide-toggle [(ngModel)]="checked" (change)="onChange()"></ob-slide-toggle>`
})
class SlideToggleWithModelAndChangeEventComponent {
  checked: boolean;
  onChange: () => void = () => {};
}

@Component({
  template: `
    <ob-slide-toggle>
      <ob-some-text></ob-some-text>
    </ob-slide-toggle>`
})
class SlideToggleProjectedLabelComponent {
}

@Component({
  selector: 'ob-some-text',
  template: `<span>{{text}}</span>`
})
class TextBindingComponent {
  text = 'Some text';
}
