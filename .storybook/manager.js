import {addons} from "@storybook/addons";
import {create} from '@storybook/theming/create';

const isDay = true;
const isDusk = !isDay;
let theme = {
    brandTitle: 'OpenBridge Web Components',
    brandUrl: 'https://gitlab.com/openbridge/openbridge-web-components',
    brandImage: 'http://www.openbridge.no/images/OpenBridge_Logo2-p-500.png',
};

if (isDay) {
    theme = {
        ...theme,
        base: 'light',
        colorPrimary: 'black',
        colorSecondary: 'rgb(51, 51, 51)', /*color-ui-element-active*/
        appBg: 'rgba(247, 247, 247, 1)', /* container-background-color*/
        appContentBg: 'rgba(247, 247, 247, 1)', /* color-ui-container-section*/

        barBg: 'rgb(252, 252, 252)', /*color-ui-container-global*/
        barTextColor: 'rgba(0, 0, 0, 0.5)', /*color-ui-element-neutral*/
        barSelectedColor: 'rgb(51, 51, 51)', /*color-ui-element-active*/
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
addons.setConfig({
  theme: storyBookTheme,
});