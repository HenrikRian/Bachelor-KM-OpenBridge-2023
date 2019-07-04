module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.ts?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
    ],
  },
};
