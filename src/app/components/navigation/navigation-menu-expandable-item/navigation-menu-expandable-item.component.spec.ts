import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuExpandableItemComponent } from './navigation-menu-expandable-item.component';
import {By} from '@angular/platform-browser';

describe('NavigationMenuExpandableItemComponent', () => {
  let component: NavigationMenuExpandableItemComponent;
  let fixture: ComponentFixture<NavigationMenuExpandableItemComponent>;
  let expandDiv: HTMLDivElement;
  let navItemDiv: HTMLDivElement;
  let navIconDiv: HTMLDivElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMenuExpandableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuExpandableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expandDiv = fixture.debugElement.query(By.css('.ob-expandable')).nativeElement;
    navItemDiv = fixture.debugElement.query(By.css('.ob-nav-item')).nativeElement;
    navIconDiv = fixture.debugElement.query(By.css('.ob-nav-icon')).nativeElement;
  });

  it('should not be active default', () => {
    expect(component.active).toBeFalsy();
    expect(navItemDiv.classList).not.toContain('ob-active');
  });

  it('should be able to become active', () => {
    component.active = true;
    fixture.detectChanges();
    expect(navItemDiv.classList).toContain('ob-active');
  });

  it('should be toggle collapsed on click on arrow', () => {
    expect(component.collapsed).toBeTruthy();
    expect(component.active).toBeFalsy();
    navIconDiv.click();
    expect(component.collapsed).toBeFalsy();
    expect(component.active).toBeFalsy();
    navIconDiv.click();
    expect(component.collapsed).toBeTruthy();
    expect(component.active).toBeFalsy();
  });

  it('should be active on click on item', () => {
    expect(component.collapsed).toBeTruthy();
    expect(component.active).toBeFalsy();
    navItemDiv.click();
    expect(component.collapsed).toBeTruthy();
    expect(component.active).toBeTruthy();
  });
});
