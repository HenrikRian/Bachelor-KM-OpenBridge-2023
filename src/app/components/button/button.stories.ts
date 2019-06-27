import {storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {ButtonTextComponent} from './button-text/button-text.component';
import {ComponentStyle} from '../../variables';
import {ButtonIconComponent} from './button-icon/button-icon.component';


storiesOf('Components|ButtonText', module)
  .add('Normal style', () => ({
    component: ButtonTextComponent,
    props: {
      label: 'Normal',
      componentStyle: ComponentStyle.Normal
    },
  }))
  .add('Raised style', () => ({
    component: ButtonTextComponent,
    props: {
      label: 'Raised',
      componentStyle: ComponentStyle.Raised
    },
  }))
  .add('with text', () => ({
    component: ButtonTextComponent,
    props: {
      label: 'Hello Button',
      componentStyle: ComponentStyle.Normal
    },
  }))
  .add('selected', () => ({
    component: ButtonTextComponent,
    props: {
      label: 'Button',
      componentStyle: ComponentStyle.Normal,
      isSelected: true,
    },
  }))
  .add('on click', () => ({
    component: ButtonTextComponent,
    props: {
      label: 'Button',
      componentStyle: ComponentStyle.Normal,
      onclick: action('Button clicked'),
    }
  }))
  .add('on click with setSelectedOnClick', () => ({
    component: ButtonTextComponent,
    props: {
      label: 'Button',
      componentStyle: ComponentStyle.Normal,
      setSelectedOnClick: true,
      onclick: action('Button clicked'),
    }
  }));


storiesOf('Components|ButtonToggle', module)
  .add('on click', () => ({
    component: ButtonToggleComponent,
    props: {
      onclick: action('Button clicked'),
    }
  }));

storiesOf('Components|ButtonGroup', module)
  .add('default', () => ({
    component: ButtonGroupComponent,
    props: {
      onclick: action('Button clicked'),
    }
  }));

storiesOf('Components|ButtonIcon', module)
  .add('with icon', () => ({
    component: ButtonIconComponent,
    props: {
      label: 'sun',
      materialDesignIconName: 'wb_sunny',
      componentStyle: ComponentStyle.Normal
    }
  }))
  .add('Raised', () => ({
    component: ButtonIconComponent,
    props: {
      label: 'sun',
      materialDesignIconName: 'wb_sunny',
      componentStyle: ComponentStyle.Raised
    }
  }));
