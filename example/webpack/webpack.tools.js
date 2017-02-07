/* eslint-disable */

/**
 * Webpack tools
 *
 * @description Individual pieces of our webpack build
 *
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

/**
 * List of tools
 *
 *  - General
 *    1. { blankCommon } is a composeable starting point
 *    2. { common } Common webpack config
 *    3. { clean } Clean the build folder
 *    4. { setEnv } Set the build environment
 *  - JavaScript
 *    5. { basicJs } ES6/Babel/React JavaScript loaders, *DEV*
 *    6. { extractJS } Extract pieces of the JS into bundles, *PROD*
 *    7. { minifyJs } Minify JS
 *  - PostCSS
 *    8. { cssConfig } PostCSS config
 *    9. { basicCSS } PostCSS loaders and functions
 *    10. { extractCSS } Extract CSS into files
 *    11. { purifyCSS } Remove unused css
 *  - Testing
 *    12. { setupTests } Setup to run tests
 */


/**
 * Blank common webpack setup
 *
 * @description Common starting point for a new webpack config
 *
 * @param {Object} opts
 * @param {Object} opts.entry is the entry object
 * @param {Object} opts.output is the output object
 * @param {Object} opts.resolve is the resolve object
 */
exports.blankCommon = function(opts) {

  return {
    entry: opts.entry,
    output: opts.output,
    resolve: opts.resolve,
  };
};


/**
 * Common webpack setup
 *
 * @description Common starting point for this webpack config
 */
exports.common = function() {

  const env = process.env.NODE_ENV;
  const PATH = {
    src: './src/index.js',
    vendor: ['react', 'redux'],
    build: 'build',
    styles: './styles/main.pcss',
  };

  const opts = {
    development: {
      entry: {
        app: PATH.src,
      },
      output: {
        path: PATH.build,
        filename: '[name].js',
      },
      resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx'],
        root: [
          path.resolve(`/src`),
        ],
      },
    },
    production: {
      entry: {
        app: PATH.src,
        vendor: PATH.vendor,
        styles: PATH.styles,
      },
      output: {
        path: PATH.build,
        filename: '[name].js',
      },
      resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx'],
        root: [
          'node_modules',
          path.resolve(`/src`),
        ],
      },
    },
    test: {
      entry: {
        app: PATH.src,
      },
      output: {
        path: PATH.build,
        filename: '[name].js',
      },
      resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx'],
        root: [
          'node_modules',
          path.resolve(`/src`),
        ],
      },
    },
  };

  if (opts[env]) {
    return opts[env];
  } else {
    return opts.dev;
  }
};

/**
 * Clean
 *
 * @description Clean the build folder
 *
 * @param {String} path to the build folder
 */
exports.clean = function(path) {
	return {
		plugins: [
			new CleanWebpackPlugin([path], {
				root: process.cwd(),
			})
		],
	};
};

/**
 * Set Environment
 *
 * @description Set the current buld environment
 *
 * @param {String} environment
 */
exports.setEnv = function(environment) {

  return {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(environment),
        },
      }),
    ],
  };
};

/**
 * Basic JS setup
 *
 * @description Basic setup for Babel/ES6/React
 *
 * @param {Array} paths to include for JS files
 */
exports.basicJS = function() {

  return {
    module: {
      loaders: [

        // Babel JS loader
        {
          test: /\.(es6.js|js|jsx)$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/,
        }

      ],
    }
  };
};

/**
 * Extract JS
 *
 * @description Extract JS out into seperate bundles e.g. vendor, ads, etc
 *
 * @param {String} chunkName name of the chunk. AKA the name that match with the config.entry name
 * @param {String} fileName. AKA the name of the file that gets built
 */
exports.extractJS = function(chunkName, fileName) {

  return {
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(chunkName, fileName),
    ],
  };
};

/**
 * Minify JS
 *
 * @description Minify the JavaScript
 */
exports.minifyJs = function() {

  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ]
  };
};

/**
 * CSS Config
 *
 * @description CSS config object
 * @property {Array} breakpoints for media queries
 * @property {Array} processors postcss plugins
 */
const breakpoints = [
  { prefix: 'xs-', mediaQuery: '(max-width: 480px)' },
  { prefix: 'sm-', mediaQuery: '(min-width: 480px)' },
  { prefix: 'md-', mediaQuery: '(min-width: 630px)' },
  { prefix: 'nrw-', mediaQuery: '(min-width: 720px)' },
  { prefix: 'lg-', mediaQuery: '(min-width: 800px)' },
  { prefix: 'mn-', mediaQuery: '(min-width: 960px)' },
  { prefix: 'xl-', mediaQuery: '(min-width: 1200px)' },
  { prefix: 'hdr-', mediaQuery: '(min-width: 1440px)' },
];

const processors = [
  require('postcss-import'),
  require('postcss-custom-properties'),
  require('postcss-custom-media'),
  require('postcss-nested'),
  require('autoprefixer')({browsers: ['last 1 version']}),
  require('postcss-responsify')({breakpoints}),
  require('cssnano'),
];

/**
 * Basic CSS
 *
 * @description Basic PostCSS setup *DEV*
 */
exports.basicCSS = function() {

  return {
    module: {
      loaders: [

        // PostCSS Loaders
        {
          test: /\.(css|pcss)$/,
          loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader'],
        },

      ],
    },
    postcss: function() {
      return processors;
    },
  };
};

/**
 * Extract CSS
 *
 * @description Extract CSS and put it into a file
 * @param {Array} paths to postcss entries
 */
exports.extractCSS = function() {

  return {
    module: {
      loaders: [

        // PostCSS Loaders
        {
          test: /\.(css|pcss)$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
        },

      ],
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
    ],
    postcss: function() {
      return processors;
    },
  };
};

/**
 * Purify CSS
 * Always use AFTER extractTextPlugin
 *
 * @description Remove unused styles
 */
exports.purifyCSS = function(paths) {

  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        paths: paths,
      }),
    ],
  };
};

/**
 * Setup Tests
 *
 * @description Setup externals for testing purposes
 */
exports.setupTests = function() {

  return {
    externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  };
};
