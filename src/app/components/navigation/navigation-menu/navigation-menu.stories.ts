import {moduleMetadata, storiesOf} from '@storybook/angular';
import {NavigationMenuComponent} from './navigation-menu.component';
import {NavigationMenuItemComponent} from '../navigation-menu-item/navigation-menu-item.component';
import {NavigationMenuExpandableItemComponent} from '../navigation-menu-expandable-item/navigation-menu-expandable-item.component';
import { action } from '@storybook/addon-actions';

const component = NavigationMenuComponent;

storiesOf('Components|Navigation NavigationMenuComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NavigationMenuComponent, NavigationMenuItemComponent, NavigationMenuExpandableItemComponent]
    })
  )
  .add('Default', () => ({
    template: `<ob-navigation-menu #menuComponent [disabled]="false" ></ob-navigation-menu>`
  }))
  .add('With item:', () => ({
    template: `
<ob-navigation-menu #menuComponent  [disabled]="false">
  <ob-navigation-menu-item materialLogo="settings" label="Selection1" (changeActiveStatus)="menuComponent.onActiveItemChange($event)"></ob-navigation-menu-item>
  <ob-navigation-menu-item materialLogo="settings" label="Selection2" (changeActiveStatus)="menuComponent.onActiveItemChange($event)"></ob-navigation-menu-item>
</ob-navigation-menu>`,
    props: {
      changeActiveItem: action('active item set')
    }
  }))
  .add('With extendable item:', () => ({
    template: `
<ob-navigation-menu #menuComponent  [disabled]="false">
<ob-navigation-menu-expandable-item materialLogo="settings" label="Main Selection" (changeActiveStatus)="menuComponent.onActiveItemChange($event)">
  <ob-navigation-menu-item materialLogo="settings" label="Selection1" (changeActiveStatus)="menuComponent.onActiveItemChange($event)"></ob-navigation-menu-item>
  <ob-navigation-menu-item materialLogo="settings" label="Selection2" (changeActiveStatus)="menuComponent.onActiveItemChange($event)"></ob-navigation-menu-item>
  </ob-navigation-menu-expandable-item>
</ob-navigation-menu>`,
    props: {
      changeActiveItem: action('active item set')
    }
  }))
    .add('With extendable item expanded:', () => ({
    template: `
<ob-navigation-menu #menuComponent  [disabled]="false">
<ob-navigation-menu-expandable-item materialLogo="settings" label="Main Selection" [collapsed]="false" (changeActiveStatus)="menuComponent.onActiveItemChange($event)">
  <ob-navigation-menu-item materialLogo="settings" label="Selection1" (changeActiveStatus)="menuComponent.onActiveItemChange($event)"></ob-navigation-menu-item>
  <ob-navigation-menu-item materialLogo="settings" label="Selection2" (changeActiveStatus)="menuComponent.onActiveItemChange($event)"></ob-navigation-menu-item>
  </ob-navigation-menu-expandable-item>
</ob-navigation-menu>`,
    props: {
      changeActiveItem: action('active item set')
    }
  }))
  .add('Add logo:', () => ({
    template: `
<ob-navigation-menu  [disabled]="false" logoSrc="/assets/img/OpenBridge_Logo2-p-500.png" >
</ob-navigation-menu>`
  }))
  .add('Add notification badge:', () => ({
    template: `
<ob-navigation-menu  [disabled]="false" logoSrc="/assets/img/OpenBridge_Logo2-p-500.png" [numberOfNotifications]="5">
</ob-navigation-menu>`
  }))
;


