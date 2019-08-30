import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuItemComponent } from './navigation-menu-item.component';
import {DebugElement} from '@angular/core';

describe('NavigationMenuItemComponent', () => {
  let component: NavigationMenuItemComponent;
  let fixture: ComponentFixture<NavigationMenuItemComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuItemComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });



});
