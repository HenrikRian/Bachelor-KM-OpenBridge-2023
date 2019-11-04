import {storiesOf} from '@storybook/angular';
import {TopBarComponent} from './top-bar.component';

const component = TopBarComponent;

storiesOf('Components|Navigation TopBarComponent', module)
  .add('Default', () => ({
    component,
    props: {
      title: 'Application',
      subTitle: 'Selection'
    },
  }))
  .add('Set menu active', () => ({
    component,
    props: {
      title: 'Application',
      subTitle: 'Selection',
      menuActive: true
    },
  }))
  ;


