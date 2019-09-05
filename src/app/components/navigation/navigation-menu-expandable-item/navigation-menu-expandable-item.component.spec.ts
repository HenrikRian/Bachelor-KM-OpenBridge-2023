import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuExpandableItemComponent } from './navigation-menu-expandable-item.component';
import {By} from '@angular/platform-browser';

describe('NavigationMenuExpandableItemComponent', () => {
  let component: NavigationMenuExpandableItemComponent;
  let fixture: ComponentFixture<NavigationMenuExpandableItemComponent>;
  let expandDiv: HTMLDivElement;
  let navItemDiv: HTMLDivElement;

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

  it('should be expandable on click', () => {
    expect(component.collapsed).toBeTruthy();
    expect(component.active).toBeFalsy();
    fixture.nativeElement.click();
    expect(component.collapsed).toBeFalsy();
    expect(component.active).toBeTruthy();
  });
});
