import '!style-loader!css-loader!openbridge-components/dist/css/openbridge.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme color',
    defaultValue: 'bright',
    toolbar: {
      icon: 'globe',
      items: ['bright', 'day', 'dusk', 'night'],
    },
  },
};

const withThemeProvider = (Story, context) => {
  document.documentElement.setAttribute('theme', context.globals.theme); // Did not get vue stuff to work
  return Story();
};
export const decorators = [withThemeProvider];

