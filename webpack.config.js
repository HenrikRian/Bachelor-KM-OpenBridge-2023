const path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    mode: 'development',
    entry: './index.ts',
    output: {
        filename: 'main.ts',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {decoratorsBeforeExport: true}],
                            ["@babel/plugin-proposal-class-properties", {"loose": true}]
                        ]
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: 'lit-svg-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};
