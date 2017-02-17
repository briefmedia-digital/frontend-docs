# Frontend Structure

### Forward

The need for a consistent frontend environment is paramount. Using React with a handful of tools
on top can ensure this. For our code to stay consistent we must all follow the same rules and coding
styles, no cowboy coders here.

### Why React?

As our web products continue to grow we are faced with an ever-growing and unmaintainable codebase
for both our JavaScript and our CSS. React allows us to structure our frontend into components and
containers keeping our code modular and maintainable. Building off of React's composable, functional,
nature we chose to implement functional CSS to ensure we can build and maintain our products.

### What is this repository for?

This repository will hold all of the documentation for our entire frontend process. The first stages of this are setting up an example feature and explaining, step-by-step how to test, build and implement that feature. This repository will also hold the config files for our tools (webpack, linters, utilities, etc.) as well as our frontend style-guide.

### File Structure
1. example
	* Example feature walkthrough
	* End-to-end, unit and integration test examples
	* React examples: smart/dumb components, controlled/uncontrolled inputs, propTypes, defaultProps, etc.
		- Redux examples: actions/reducers/middleware/devtools
		- Step-by-step guide
2. utils
	* JSDom testing util
	* Webpack config
	* Linter setup
	* NPM scripts
	* Documentation on each of the utils
3. CSS
	* Our PostCSS
	* Documentation on our PostCSS
4. Styleguide
	* Fully documented coding style guide for
		* CSS/JS/React/Frontend Performance

### Resources

List of helpful links to documentation, tutorials and articles sorted by tech

#### Other resource lists

1. [Awesome, curated list of lists](https://github.com/sindresorhus/awesome)
2. [React-redux-links](https://github.com/markerikson/react-redux-links)
3. [Top React articles from 2016](https://medium.mybridge.co/react-js-top-10-articles-of-the-year-v-2017-e95092964e49#.egwhhi175)

#### React

1. [React docs](https://facebook.github.io/react/)
2. [Awesome, React](https://github.com/enaqx/awesome-react)
3. [Tutorialpoint React walkthrough](https://www.tutorialspoint.com/reactjs/)
4. [React-redux real world example](https://github.com/gothinkster/react-redux-realworld-example-app)
5. [Antd React component framework](https://ant.design/docs/react/introduce)
6. [React design patterns](https://github.com/krasimir/react-in-patterns) - This is a resource you will be back to a lot
7. [Another React design patterns site](https://github.com/chantastic/reactpatterns.com) - Same with this, you will be back
8. [React styleguide and patterns from Planningcenter](https://github.com/planningcenter/react-patterns) - Another good one, but it focuses on using React with Rails
9. [Good Practices for Testing React Apps](https://medium.com/@TuckerConnelly/good-practices-for-testing-react-apps-3a64154fa3b1#.wiwjbgymj)
10. [TDD React Tutorial](https://www.spencerdixon.com/blog/test-driven-react-tutorial.html)
11. [Higher Order React Components](http://natpryce.com/articles/000814.html)

#### Redux

1. [Redux docs](http://redux.js.org/)
2. [10 Tips for Better Redux Architecture](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44#.oizehvkw7) - lengthy, but great post
3. [Unit Testing Redux](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)
4. [Testing Redux Applications](http://randycoulman.com/blog/2016/03/15/testing-redux-applications/)
5. [Redux Ecosystem](https://github.com/markerikson/redux-ecosystem-links)

### CSS

5. [PostCSS](http://postcss.org/)
6. [BassCSS docs](http://basscss.com/)
7. [CSS and Scalability](http://mrmrs.io/writing/2016/03/24/scalable-css/) - An essay about CSS
8. [Rationalizing Functional CSS](https://marcelosomers.com/writing/rationalizing-functional-css/) - This is a must read
9. [Concentric CSS Model](https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/concentric.txt)
10. [Maintainable CSS](http://maintainablecss.com/)
11. [React and Functional CSS](https://github.com/chibicode/react-functional-css-protips)
12. [Buzzfeed's SOLID CSS framework](http://solid.buzzfeed.com/)
13. [Marvelapp's CSS Framework](https://marvelapp.com/styleguide/overview/introduction)

#### Testing

1. [Blue-tape](https://github.com/spion/blue-tape) - Test framework
2. [Mocha](https://mochajs.org/) - Testing framework
3. [Chai](http://chaijs.com/) - Assertion library
4. [Enzyme](https://github.com/airbnb/enzyme) - Testing utility for React
5. [Sinon](http://sinonjs.org/) - Mocks/Spies/Stubs
6. [Tutorialspoint software testing glossary](https://www.tutorialspoint.com/software_testing_dictionary/)
7. [A case for Tape over Mocha](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.yjpps7cpg)
