#Frontend Structure

###Forward

The need for a consistent frontend environment is paramount. Using React with a handful of tools
on top can ensure this. For our code to stay consistent we must all follow the same rules and coding
styles, no cowboy coders here.

###Why React?

As our web products continue to grow we are faced with an ever-growing and unmaintainable codebase
for both our JavaScript and our CSS. React allows us to structure our frontend into components and
containers keeping our code modular and maintainable. Building off of React's composable, functional,
nature we chose to implement functional CSS to ensure we can build and maintain our products.

###What is this repository for?

This repository will hold all of the documentation for our entire frontend process. The first stages of this are setting up an example feature and explaining, step-by-step how to test, build and implement that feature. This repository will also hold the config files for our tools (webpack, linters, utilities, etc.) as well as our frontend style-guide.

###File Structure
* example
   * Example feature walkthrough
   * End-to-end, unit and integration test examples
   * React examples: smart/dumb components, controlled/uncontrolled inputs, propTypes, defaultProps, etc.
    * Redux examples: actions/reducers/middleware/devtools
    * Step-by-step guide
* utils
    * JSDom testing util
    * Webpack config
    * Linter setup
    * NPM scripts
    * Documentation on each of the utils
* CSS
    * Our PostCSS
    * Documentation on our PostCSS
* Styleguide
    * Fully documented coding style guide for:
        * CSS/JS/React/Frontend Performance
