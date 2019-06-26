import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

import '!style-loader!css-loader!../dist/css/openbridge-day.css';
configure(loadStories, module);
