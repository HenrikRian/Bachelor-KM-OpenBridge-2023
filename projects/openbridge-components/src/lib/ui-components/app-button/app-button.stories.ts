import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AppButtonModule, IconSize} from 'openbridge-components';


storiesOf('Components|App button', module)
  .addDecorator(
    moduleMetadata({
      imports: [AppButtonModule],
    })
  )
  .add('Normal style', () => ({
    template: ` <ob-app-button icon="directions_boat" [size]="size"></ob-app-button>`,
    props: {
      size: IconSize.normal
    }
  }))
  .add('Large style', () => ({
    template: ` <ob-app-button icon="directions_boat" [size]="size" label="app button"></ob-app-button>`,
    props: {
      size: IconSize.large
    }
  }))

;
