/* eslint-disable */
const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const tools = require('./webpack.tools.js');


/**
 * Production webpack config
 *
 * Build flow:
 *
 *
 *
 *
 *
 */
const prodConfig = merge(
  tools.setEnv('production'),
  tools.common(),
  tools.basicJS(),
  tools.lintJS(),
  tools.extractJS('vendor', 'vendor.js'),
  tools.minifyJS(),
  tools.lintCSS(),
  tools.extractCSS(),
  //tools.purifyCSS(glob.sync(path.join('src', '**', '*'))),
  tools.clean('build')
);

module.exports = validate(prodConfig);
