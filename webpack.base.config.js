/* global __dirname */

let path = require('path');
let webpack = require('webpack');

let LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

let babelSettings = JSON.stringify({
    plugins: ['lodash', 'babel-plugin-transform-function-bind', 'transform-object-rest-spread'],
    presets: ['es2015']
});

module.exports = {
    entry: {
        index: ['./src/index.js', './src/index.htm']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'vuex-model-template.js'
    },
    resolve: {
        modules: [
            path.resolve('.'),
            path.resolve('./src'),
            'node_modules'
        ],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: `babel-loader?${babelSettings}`
            }, {
                test: /index\.htm(l?)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    'plugins': [
        new LodashModuleReplacementPlugin,
        new webpack.optimize.OccurrenceOrderPlugin
    ]
};