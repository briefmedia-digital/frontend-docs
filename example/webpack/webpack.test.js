/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const tools = require('./webpack.tools.js');

/**
 * Test webpack config
 *
 * Build flow:
 *
 *
 *
 *
 *
 */
const testConfig = merge(
  tools.setEnv('test'),
  tools.common(),
  tools.basicJS(),
  tools.basicCSS(),
  tools.setupTests(),
  tools.clean('build')
);

module.exports = validate(testConfig);
