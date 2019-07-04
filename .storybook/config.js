import {configure, addDecorator} from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

import '!style-loader!css-loader!../dist/css/openbridge-day.css';
configure(loadStories, module);

