let webpack = require('webpack');
let webpackConfig = require('./webpack.base.config');

let settings = JSON.stringify({
    definitions: ['dev', 'log']
});

let rule = webpackConfig.module.rules[0];
rule.loader += `!webpack-preprocessor?${settings}`;

webpackConfig.output.filename = 'vuex-model-template.instrumented.js';

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: false,
    mangle: {
        keep_fnames: true
    },
    beautify: true,
    comments: false
}));

module.exports = webpackConfig;