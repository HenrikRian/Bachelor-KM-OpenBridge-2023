import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonComponent} from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    button = compiled.querySelector('a');
  });

  it('should be an a-element', () => {
    expect(button).toBeTruthy();
  });

  it('should have a label', () => {
    const label = 'OpenBridge Rocks!';
    component.label = label;
    fixture.detectChanges();
    expect(button.textContent).toBe(label);
  });

  it('should emit on click', () => {
    spyOn(component.onclick, 'emit');

    // trigger the click
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.onclick.emit).toHaveBeenCalledWith();
  });
});
