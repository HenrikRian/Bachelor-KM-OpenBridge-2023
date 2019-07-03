import {BidiModule} from '@angular/cdk/bidi';
import {Component} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ButtonSlideToggleComponent, ObButtonSlideToggleChange} from './button-slide-toggle.component';

const checkedClass = 'ob-selected';

describe('ButtonSlideToggle without forms', () => {
  beforeEach(fakeAsync(() => {
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

      const slideToggleDebug = fixture.debugElement.query(By.directive(ButtonSlideToggleComponent));

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

    it('should focus on underlying input element when the host is focused', fakeAsync(() => {
      expect(document.activeElement).not.toBe(inputElement);

      slideToggleElement.focus();

      tick();
      fixture.detectChanges();
      expect(document.activeElement.id).toBe(inputElement.id);
    }));
  });


  describe('custom template', () => {
    it('should not trigger the change event on initialization', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleBasicComponent);

      fixture.componentInstance.slideChecked = true;
      fixture.detectChanges();

      expect(fixture.componentInstance.lastEvent).toBeFalsy();
    }));

    it('should be able to set the tabindex via the native attribute', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleWithTabindexAttrComponent);

      fixture.detectChanges();

      const slideToggle = fixture.debugElement
        .query(By.directive(ButtonSlideToggleComponent)).componentInstance as ButtonSlideToggleComponent;

      expect(slideToggle.tabIndex)
        .toBe(5, 'Expected tabIndex property to have been set based on the native attribute');
    }));

    it('should set the tabindex of the host element to -1', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleWithTabindexAttrComponent);

      fixture.detectChanges();

      const slideToggle = fixture.debugElement.query(By.directive(ButtonSlideToggleComponent)).nativeElement;
      expect(slideToggle.getAttribute('tabindex')).toBe('-1');
    }));

    it('should remove the tabindex from the host element when disabled', fakeAsync(() => {
      const fixture = TestBed.createComponent(SlideToggleWithTabindexAttrComponent);

      fixture.componentInstance.disabled = true;
      fixture.detectChanges();

      const slideToggle = fixture.debugElement.query(By.directive(ButtonSlideToggleComponent)).nativeElement;
      expect(slideToggle.hasAttribute('tabindex')).toBe(false);
    }));
  });
});

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
