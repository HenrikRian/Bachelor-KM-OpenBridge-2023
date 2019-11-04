import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {NavigationMenuItemComponent} from './navigation-menu-item.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('NavigationMenuItemComponent', () => {
  let component: NavigationMenuItemComponent;
  let fixture: ComponentFixture<NavigationMenuItemComponent>;
  let debugElement: DebugElement;
  let itemDiv: HTMLDivElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationMenuItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuItemComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    itemDiv = debugElement.query(By.css('.ob-nav-item')).nativeElement;
  });

  function clickOnDiv() {
    debugElement.nativeElement.click();
    fixture.detectChanges();
  }

  it('should publish activated event', fakeAsync(() => {
    const changeSpy = jasmine.createSpy('navigation active change listener');
    component.changeActiveStatus.subscribe(changeSpy);

    clickOnDiv();
    tick();
    expect(changeSpy).toHaveBeenCalledTimes(1);
  }));

  it('should become active on click', () => {
    expect(component.active).toBeFalsy();
    expect(itemDiv.classList).not.toContain('ob-active');

    clickOnDiv();
    expect(component.active).toBeTruthy();
    expect(itemDiv.classList).toContain('ob-active');

  });

  it('change of active should publish activated event', fakeAsync(() => {
    const changeSpy = jasmine.createSpy('navigation active change listener');
    component.changeActiveStatus.subscribe(changeSpy);

    expect(component.active).toBeFalsy();
    component.active = true;
    fixture.detectChanges();
    tick();
    expect(changeSpy).toHaveBeenCalledTimes(1);
  }));

});
