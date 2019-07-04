import {moduleMetadata, storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {ButtonTextComponent} from './button-text/button-text.component';
import {ComponentStyle} from '../../variables';
import {ButtonIconComponent} from './button-icon/button-icon.component';
import {ButtonAnchorComponent, ButtonComponent} from './button.component';


storiesOf('Components|Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent, ButtonAnchorComponent],
    })
  )
  .add('Normal style', () => ({
    template: `<a ob-button-normal>Hi </a>`
  }))
  .add('Raised style', () => ({
    template: `<a ob-button-raised>Hi </a>`
  }))
  .add('With icon', () => ({
    template: `
    <a ob-button-normal>
      <span class="ob-icon">
          <i class="material-icons">wb_sunny</i>
        </span>
      <span class="ob-text-under">sun</span> 
    </a>`,
  }))
 ;


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
