#Webpack Setup

1. [Overview](#overview)
2. [Webpack Tools](#webpack-tools)
3. [Dev Build](#dev-build)
4. [Production Build](#production-build)
5. [Testing](#testing)


## Overview

Webpack is a tool for bundling files to be used on the web. In this setup we are specifically using webpack to bundle our JavaScript and our CSS as well as transpiling ES6+, Transforming JSX into plain objects and transpiling our PostCSS into browser-ready CSS.

This setup has seperated each of the major parts of a webpack build so we can create our webpack configurations from modular pieces. This also allows for a smoother transition to webpack 2, plus all the benefits of being easier to read.

Webpack merge and webpack validator are in use to help keep the webpack configs easier to understand and with fewer issues.

The configurations are as follows
1. **webpack.dev.js** - Exports development configuration. Bundles JS into vendor and app files, CSS is bundled into the app.js. This can be ran using `npm run dev`
2. **webpack.prod.js** - Exports production build config. Bundles JS into vendor and app files. CSS is bundled into app.css. This can be ran using `npm run build`
3. **webpack.test.js** - Exports test build config. This will bundle all of the necessary pieces to run tests, coverage and linting. This can be ran using `npm run test`
4. **webpack.tools.js** - Exports all of the building blocks to make a new webpack config.
5. **webpack.config.js** - Chooses which webpack config to run based on the `NODE_ENV` supplied

## Webpack Tools

- General
  1. **blankCommon** - is a composeable starting point
  2. **common** - Common webpack config
  3. **clean** - Clean the build folder
- JavaScript
  4. **basicJs** - ES6/Babel/React JavaScript loaders, *DEV*
  5. **extractJS** - Extract pieces of the JS into bundles, *PROD*
  6. **minifyJs** - Minify JS with the Uglify JS  webpack plugin
- PostCSS
  7. **cssConfig** - PostCSS config. Breakpoints and postCSS plugins
  8. **basicCSS** - PostCSS loaders and function
  9. **extractCSS** - Extract CSS into files
  10. **purifyCSS** - Remove unused css
- General
  11. **setEnv** - Set the build environment
- Testing
  12. **setupTests** Setup to run tests

## Dev Build

The `NODE_ENV` is set to `development` this means that React and Redux are both built with their development builds. Dev is not minified because it would throw an error inside of Redux and React if we did minimize them. Dev starts with the common build that is tailored to this folder structore. The basicJS function adds in loaders for babel. The basicCSS adds the CSS loaders and the postCSS function. We also clean the build folder to help minimize build errors.

*Development*
```javascript
const devConfig = merge(
  tools.setEnv('development'),
  tools.common(),
  tools.basicJS(),
  tools.basicCSS(),
  tools.clean('build')
);
```
## Production Build

The `Node_ENV` is set to `production` this means that React and Redux are both using their production version of their code. More on [React](https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build). The development builds of React and Redux provide more errors and stricter checking to catch inconsistancies in development. Production also uses the common and basicJS tools. Production extracts the JS into an `app.js` and `vendor.js` file. Both of the JS files are then minified using UglifyJS which also uses unused development code. CSS is extracted into an `app.css` file. The CSS is also purified based on classes used in the components rendered in app.js.

*Production*
```javascript
const prodConfig = merge(
  tools.setEnv('production'),
  tools.common(),
  tools.basicJS(),
  tools.extractJS('vendor', 'vendor.js'),
  tools.minifyJs(),
  tools.extractCSS(),
  tools.purifyCSS([PATH.src]),
  tools.clean('build')
);
```

## Testing

The test setup is almost identical to the dev setup with the bonus webpack.config.externals so we can transpile ES6 tests without bundling the externals without throwing errors on imports.

*Testing*
```javascript
const testConfig = merge(
  tools.setEnv('test'),
  tools.common(),
  tools.basicJS(),
  tools.basicCSS(),
  tools.setupTests(),
  tools.clean('build')
);
```
