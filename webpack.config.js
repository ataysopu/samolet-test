const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
    },
    devServer: {
        proxy: {
            '/opendata': {
                target: 'https://data.gov.ru/sites/default/files',
                changeOrigin: true,
                secure: false,
            },
        },
        historyApiFallback: true,
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};