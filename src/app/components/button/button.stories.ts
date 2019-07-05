import {moduleMetadata, storiesOf} from '@storybook/angular';
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
  .add('Button elemennt style', () => ({
    template: `<button ob-button-normal>Hi </button>`
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
