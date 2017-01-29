/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const tools = require('./webpack.tools.js');

/**
 * Dev webpack config
 *
 * Build flow:
 *
 *
 *
 *
 *
 */
const devConfig = merge(
  tools.setEnv('development'),
  tools.common(),
  tools.basicJS(),
  tools.basicCSS(),
  tools.clean('build')
);

module.exports = validate(devConfig);
