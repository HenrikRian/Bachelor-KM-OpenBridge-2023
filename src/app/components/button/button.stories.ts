import {storiesOf} from '@storybook/angular';
import {ButtonNormalComponent} from './button-normal/button-normal.component';
import {ButtonRaisedComponent} from './button-raised/button-raised.component';
import {action} from '@storybook/addon-actions';


function buttonStory(name: string, component) {
  storiesOf('Components|' + name, module)
    .add('with text', () => ({
      component,
      props: {
        label: 'Hello Button',
      },
    }))
    .add('selected', () => ({
      component,
      props: {
        label: 'Button',
        isSelected: true,
      },
    }))
    .add('on click', () => ({
      component,
      props: {
        label: 'Button',
        onclick: action('Button clicked'),
      }
    }));
}

buttonStory('ButtonNormalComponent', ButtonNormalComponent);
buttonStory('ButtonRaisedComponent', ButtonRaisedComponent);

