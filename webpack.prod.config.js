let webpackConfig = require('./webpack.base.config');

let rule = webpackConfig.module.rules[0];
rule.loader += `!webpack-preprocessor`;

module.exports = webpackConfig;