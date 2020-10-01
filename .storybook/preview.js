import '!style-loader!css-loader!sass-loader!../scss/openbridge.scss';
import {addParameters} from "@storybook/html";
import {create} from '@storybook/theming/create';

const isBright = true;
const isDusk = false;
let theme = {
    brandTitle: 'OpenBridge Components',
    brandUrl: 'https://gitlab.com/openbridge/openbridge-component',
    brandImage: 'http://www.openbridge.no/images/OpenBridge_Logo2-p-500.png',
};

if (isBright) {
    theme = {
        ...theme,
        base: 'light',
        colorPrimary: 'black',
        colorSecondary: 'rgba(0, 0, 0, 0.9)', /*color-ui-element-active*/
        appBg: 'rgba(234, 234, 234, 1)', /* color-ui-container-section*/
        appContentBg: 'rgba(234, 234, 234, 1)', /* color-ui-container-section*/

        barBg: '#D5D5D5', /*color-ui-container-global*/
        barTextColor: 'rgba(0, 0, 0, 0.7)', /*color-ui-element-neutral*/
        barSelectedColor: 'rgba(0, 0, 0, 0.9)', /*color-ui-element-active*/
    }
} else if (isDusk) {
    theme = {
        ...theme,
        base: 'dark',
        colorPrimary: 'black',
        //colorSecondary: 'rgba(255, 255, 255, 1)', /*color-ui-element-active*/
        appBg: 'rgba(54, 54, 54, 1)', /* color-ui-container-section*/
        appContentBg: 'rgba(54, 54, 54, 1)', /* color-ui-container-section*/
        textColor: 'white',
        textInverseColor: 'black',
        inputTextColor: 'black',

        barBg: 'rgba(64, 64, 64, 1)',
        barTextColor: 'rgba(255, 255, 255, 0.6)', /*color-ui-element-neutral*/
        barSelectedColor: 'rgba(255, 255, 255, 1)', /*color-ui-element-active*/
    }
}

const storyBookTheme = create(theme);

addParameters({
    grid: {cellSize: 8},
    options: {
        theme: storyBookTheme,
    },
});
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
