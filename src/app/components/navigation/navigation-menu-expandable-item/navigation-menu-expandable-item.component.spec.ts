import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuExpandableItemComponent } from './navigation-menu-expandable-item.component';
import {By} from '@angular/platform-browser';

describe('NavigationMenuExpandableItemComponent', () => {
  let component: NavigationMenuExpandableItemComponent;
  let fixture: ComponentFixture<NavigationMenuExpandableItemComponent>;
  let expandDiv: HTMLDivElement;

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
  });

  it('should be collapsed by default', () => {
    expect(component.collapsed).toBeTruthy();
    expect(expandDiv.classList).not.toContain('ob-active');
  });

  it('should be expandable', () => {
    component.collapsed = false;
    fixture.detectChanges();
    expect(expandDiv.classList).toContain('ob-active');
  });

  it('should be expandable on click', () => {
    expect(component.collapsed).toBeTruthy();
    expect(component.active).toBeFalsy();
    expandDiv.click();
    expect(component.collapsed).toBeFalsy();
    expect(component.active).toBeTruthy();
  });
});
