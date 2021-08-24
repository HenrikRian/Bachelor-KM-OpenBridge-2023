// your app's webpack.config.js
const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../view/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    const rules = config.module.rules.filter(
      (v) => !v.test.toString().match(/svg/)
    );
    rules.push(...custom.module.rules);
    config.module.rules = rules;
    return config;
  },
};
