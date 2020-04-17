const path = require('path');

module.exports = {
  stories: ['../scss/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-storysource/register', '@storybook/addon-cssresources/register']
};
