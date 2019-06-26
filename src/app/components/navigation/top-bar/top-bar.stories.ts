import {storiesOf} from '@storybook/angular';
import {TopBarComponent} from './top-bar.component';

const component = TopBarComponent;

storiesOf('Components|Navigation TopBarComponent', module)
  .add('Default', () => ({
    component,
    props: {
      label: 'Hello Button',
    },
  }));


