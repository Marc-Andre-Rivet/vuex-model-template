let webpackConfig = require('./webpack.base.config');

let rule = webpackConfig.module.rules[0];
rule.loader += `!webpack-preprocessor`;

webpackConfig.output.filename = 'vuex-model-template.js';

module.exports = webpackConfig;