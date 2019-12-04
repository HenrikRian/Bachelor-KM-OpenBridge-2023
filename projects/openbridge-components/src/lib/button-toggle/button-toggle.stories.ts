import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ButtonToggleComponent, ButtonToggleGroupComponent} from './button-toggle.component';


storiesOf('Components|ButtonToggle', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonToggleComponent, ButtonToggleGroupComponent],
    })
  )
  .add('Normal style', () => ({
    template: `<ob-button-toggle-group>
    <button ob-button-toggle [checked]="true">
      <span class="ob-icon">
        <i class="material-icons">wb_sunny</i>
      </span>
      <span class="ob-text-under">sun</span>
    </button>
    <button ob-button-toggle>
      <span class="ob-icon">
        <i class="material-icons">wb_sunny</i>
      </span>
      <span class="ob-text-under">sun</span>
    </button></ob-button-toggle-group>`
  }))
;
