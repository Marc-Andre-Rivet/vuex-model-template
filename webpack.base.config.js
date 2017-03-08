/* global __dirname */

let path = require('path');
let webpack = require('webpack');

// let LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

let babelSettings = JSON.stringify({
    plugins: [/*'lodash',*/ 'babel-plugin-transform-function-bind', 'transform-object-rest-spread'],
    presets: ['es2015']
});

module.exports = {
    entry: {
        index: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'vuex-model-template.dev.js',
        libraryTarget: 'umd'
    },
    externals: {
        "lodash": "lodash",
        "vue": "vue",
        "vuex": "vuex"
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
            }
        ]
    },
    'plugins': [
        // new LodashModuleReplacementPlugin,
        new webpack.optimize.OccurrenceOrderPlugin
    ]
};