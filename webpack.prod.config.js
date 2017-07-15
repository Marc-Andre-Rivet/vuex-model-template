let webpack = require('webpack');
let webpackConfig = require('./webpack.base.config');

let settings = JSON.stringify({

});

let rule = webpackConfig.module.rules[0];
rule.loader += `!webpack-preprocessor?${settings}`;

webpackConfig.output.filename = 'vuex-model-template.js';

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: true,
    mangle: {
        keep_fnames: true
    },
    beautify: false,
    comments: false
}));

module.exports = webpackConfig;