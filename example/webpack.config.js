/* eslint-disable */
const devConfig = require('./webpack/webpack.dev.js');
const prodConfig = require('./webpack/webpack.prod.js');
const testConfig = require('./webpack/webpack.test.js');
const env = process.env.NODE_ENV;

if (env === 'development') {
  module.exports = devConfig;
} else if (env === 'production') {
  module.exports = prodConfig;
} else if (env === 'test') {
  module.exports = testConfig;
} else {
  module.exports = {};
}
