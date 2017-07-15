/* global __dirname */

let path = require('path');
let webpack = require('webpack');

let LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

let babelSettings = JSON.stringify({
    plugins: ['es6-promise', 'lodash', 'babel-plugin-transform-function-bind', 'transform-object-rest-spread'],
    presets: ['es2015'],
    cacheDirectory: true
});

let settings = JSON.stringify({
    definitions: ['dev']
});

module.exports = {
    entry: {
        index: ['./example/index.htm', './example/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'build/example'),
        filename: '[name].js'
    },
    resolve: {
        modules: [
            path.resolve('.'),
            path.resolve('./example'),
            path.resolve('./node_modules'),
            path.resolve('./src')
        ],
        alias: {
            vue: 'vue/dist/vue.js',
            'vuex-model-template': 'src/index.js'
        },
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\/example\/index\.htm(l?)$/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: `babel-loader?${babelSettings}!webpack-preprocessor?${settings}`
            }
        ]
    },
    plugins: [
        new LodashModuleReplacementPlugin,
        new webpack.optimize.OccurrenceOrderPlugin
    ]
};