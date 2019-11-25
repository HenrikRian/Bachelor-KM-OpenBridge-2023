import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {AppButtonModule, IconSize} from 'openbridge-components';
import {By} from '@angular/platform-browser';
import {AppButtonComponent} from './app-button.component';

@Component({
  template: `
      <ob-app-button
              [size]="IconSize.large"
              [label]="label"
              [disabled]="isDisabled">
      </ob-app-button>
  `
})
class AppButtonLargeComponent {
  isDisabled = false;
  IconSize = IconSize;
  label: string;
}

@Component({
  template: `
      <ob-app-button
              [size]="IconSize.normal"
              [label]="label"
              [disabled]="isDisabled">
      </ob-app-button>
  `
})
class AppButtonNormalComponent {
  isDisabled = false;
  IconSize = IconSize;
  label: string;
}

describe('ObAppButtonNormalComponent', () => {
  let appButtonDebugElement: DebugElement;
  let component: AppButtonComponent;
  let fixture: ComponentFixture<AppButtonNormalComponent>;
  let componentNormal: AppButtonNormalComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppButtonNormalComponent],
      imports: [AppButtonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppButtonNormalComponent);
    componentNormal = fixture.debugElement.componentInstance;
    appButtonDebugElement = fixture.debugElement.query(By.directive(AppButtonComponent));
    component = appButtonDebugElement.injector.get<AppButtonComponent>(AppButtonComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(appButtonDebugElement).toBeTruthy();
  });

  it('should not have a label', () => {
    componentNormal.label = 'Test';
    expect(appButtonDebugElement.query(By.css('.ob-label'))).toBeNull();
  });

  it('should disable', () => {
    const buttonIcon: HTMLButtonElement = appButtonDebugElement.query(By.css('button')).nativeElement;
    expect(buttonIcon.disabled).toBeFalsy();
    componentNormal.isDisabled = true;
    fixture.detectChanges();
    expect(buttonIcon.disabled).toBeTruthy();
  });
});

describe('ObAppButtonLargeComponent', () => {
  let appButtonDebugElement: DebugElement;
  let component: AppButtonComponent;
  let fixture: ComponentFixture<AppButtonLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppButtonLargeComponent],
      imports: [AppButtonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppButtonLargeComponent);
    appButtonDebugElement = fixture.debugElement.query(By.directive(AppButtonComponent));
    component = appButtonDebugElement.injector.get<AppButtonComponent>(AppButtonComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(appButtonDebugElement).toBeTruthy();
  });

  it('should have a label', () => {
    component.label = 'Test';
    expect(appButtonDebugElement.query(By.css('.ob-label'))).toBeTruthy();
  });
});
