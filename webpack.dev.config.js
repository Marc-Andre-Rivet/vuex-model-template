let webpackConfig = require('./webpack.base.config');

let settings = JSON.stringify({
    definitions: ['vuex_model_template_dev']
});

let rule = webpackConfig.module.rules[0];
rule.loader += `!webpack-preprocessor?${settings}`;

module.exports = webpackConfig;