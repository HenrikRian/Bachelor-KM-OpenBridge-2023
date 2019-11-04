module.exports = async ({ config, mode }) => {
    let scssLoader = config.module.rules.find(i => !!'a.scss'.match(i.test));
    scssLoader.use = [
        'to-string-loader',
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ];
    let htmlLoader = config.module.rules.find(i => !!'a.html'.match(i.test));
    htmlLoader.loader = 'html-loader';

    config.module.rules.push({
        test: /\.stories\.ts?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      });

    return config;
};




