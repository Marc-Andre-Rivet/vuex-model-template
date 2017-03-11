let webpackConfig = require('./webpack.base.config');

let settings = JSON.stringify({
    definitions: ['dev', 'log']
});

let rule = webpackConfig.module.rules[0];
rule.loader += `!webpack-preprocessor?${settings}`;

webpackConfig.output.filename = 'vuex-model-template.instrumented.js';

module.exports = webpackConfig;