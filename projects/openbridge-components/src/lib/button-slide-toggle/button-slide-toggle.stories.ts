import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ButtonSlideToggleComponent} from './button-slide-toggle.component';


storiesOf('Components|ButtonSlideToggle', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonSlideToggleComponent],
    })
  )
  .add('Normal style', () => ({
    template: '<ob-slide-toggle></ob-slide-toggle>'

  }))

;
