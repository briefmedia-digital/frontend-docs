# Testing

## Table of Contents

  1. [Why Test?](#why-test)
  2. [Types of Tests](#types-of-tests)
  4. [What to Test](#what-to-test)
  4. [Testing Tools](#testing-tools)
  3. [Spies Stubs and Mocks](#spies-stubs-mocks)
  5. [Testing React](#testing-react)
  6. [Testing Redux](#testing-redux)
  7. [Testing Utilities](#testing-utilities)
  8. [Testing Services](#testing-services)
  9. [Vendor Files](#vendor-files)


## Why Test?

Writing tests is a lot like working out, if you aren't doing it right now it is difficult to get into, but when you find your groove and really get into it will make you stronger, plus writing tests keeps developers accountable for their code changes.

Taking a test-first approach has many benefits and only a few downsides. Tests give the developer confidence that the code they are pushing only adds to the quality of the codebase and never takes from it. Testing code also keeps the coding style consistent which also helps readability, decreasing development time. With tests we can be sure all requirements are met without creating more code than needed. Tests also reduce the need for documenting edge-cases as that documentation will be replaced by code. Updating old, tested, code is as easy as deleting the code and then rewriting it until the tests pass, no more questioning if code is needed.

When it comes to test coverage we aim for 100% but it is impossible to have some of the JavaScript tested. We do not test third-party/vendor code such as analytics code that might be inserted with a script tag, or code imported from an npm module.


## Types of Tests

The types of tests we use are:

1. End-to-End
2. Unit
3. Integration

### End-to-End Tests

E2E tests follow the flow of an application or UI from the start of a task to the end of that task. E2E testing requires real browsers and devices which are supplied by testing frameworks like Karma or WebDriver. An example e2e test would be a test that automates users creating accounts. This would fire up a browser, go to the registration page and sign up (without recaptcha of course). E2e tests are the overarching tests for features or pages that allow us to simulate user-interaction. E2e tests are also the first line of defense against regression bugs.

### Unit Tests

Unit tests are designed to make sure small, contained, code is working as intended. Code is made of units, the smallest chunks of code that contain their functionality. Unit tests should not be written in a way that requires real world data, all of the data must be able to be mocked. Unit should not require the DOM to be ran, we use JSDom to mock the DOM. Unit tests are perfect for any code you can't follow in your head, ideally it would be each pure function. Most of the tools files, as well as reducers, will be tested here.

### Integration Tests

Integration tests deal with how the view layer integrates with the rest of the technologies that touch it. Integration tests deal with DOM interactions (did the component render? Did the loading state fire?), interactions with redux (versus testing non-connected components) and interactions with how the component receives data (normalizing data? handling errors, etc.). Most of the interface files will be tested here.

## What to Test

The frontend can be broken down into just a handful of groups. Each of these groups has a different testing strategy, some require the full suite of test types and other only need unit tests. The groups are as following

1. Components
  - Simple
  - Complex
2. Containers
  - Redux
  - Utility
3. Interface
4. Tool

#### Components

The Components folder makes up the lego bucket that is the view layer. From here we can put together anything needed for the site. The components are broken up into folders based on complexity. Based on the ideas of atomic design we start with Atoms and work our way up to Organisms. **Atoms, Molecules and Organisms will all need integration tests for DOM interactions**. Utility components will be a mix of unit and integration tests. Atoms and most Molecules will be classified as a simple component and Organisms and Utilities will be complex.

#### Containers

Containers bind data to dumb, or simple, components. Most containers will be composed using react-redux and will need to inject a redux store to test with. This redux testing wrapper will be used during e2e testing as well as integration testing. Utility components will require a case-by-case decision on if an e2e test is need and what integration or unit tests might be employed. Examples of Utility components are theme, head/meta tags, event listener, accessibility, etc.

*Example redux wrapper*
```javascript
// testUtils.js
import { createStore } from 'path/to/store.js';

...

export function generateStore(reducer, initState = undefined) {

  return store = createStore(reducer, initState)
};
```

*Applying this to the Component*
```javascript
// ExampleContainer.jsx
import React, { Container, PropTypes } from 'react';
import { connect } from 'react-redux';

...

ExampleContainer.contextTypes = { store: PropTypes.object };
export default ExampleContainer;
```

*Testing the container with redux intact*
```javascript
// ExampleContainer.integration.spec.js
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { generateStore } from 'path/to/testUtils';

import ExampleContainer from 'path/to/ExampleContainer';
import exampleReducer from 'path/to/reducer';
import { fooAction } from 'path/to/actions';

...

describe('ExampleContainer integrating Redux', () => {

  const store = generateStore(exampleReducer);
  const wrapper = mount(<ExampleContainer />, { context: { store } });

  it('should have a property foo equal to 1', () => {
    expect(wrapper.state('foo')).to.equal(1);
  });

  it('should do foo', () => {
    store.dispatch(fooAction());
    expect(wrapper.state('foo')).to.equal('foo');
  });
});

```

## Testing Tools

**NOTE:** This section is not final so I will list out all the options on the table so far.

* Test Runners
  - Karma
  - Mocha
  - Ava
* Assertion Libraries
  - Tape/Blue Tape
  - Chai
* React
  - Enzyme
  - Jest
* Browser/Device mocking
  - JSDom
  - Web Driver/ Selenium
  - Casper.js
  - Phantom.js
* Coverage
  - Instanbul

We are leaning towards:

1. **Karma** - Test runner with great cross-browser support, plays well with webpack. Karma is there to run tests in a multitude of environments.
2. **Mocha** - Testing framework that powers the entire testing structure. Karma runs this code against different environments.
3. **Chai** - Utility and syntactic sugar for TDD/BDD assertion/expect/should library of choice.
4. **Sinon** - Mocks/Spies/Stubs
5. **Enzyme** - Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
6. **JSDom** - Simple headless browser for JS. Can emulate browsers for Karma.
7. **Instanbul** - Code coverage to make sure as much of our code as possible is being tested.

## Spies Stubs Mocks

### Spies

Spies are functions that record information about what arguments were passed to them and how many times they were called. They are extremely useful when testing callbacks. When you wrap a spy around a function, that original function gets called while the spy silently collects information.

```javascript
// FooBar.spec.js

...

const foo = (fn) => {
  return fn();
};

describe('FooBar', () => {

  it('does foo', () => {
    const callback = sinon.spy();
    foo(callback);
    expect(callback.callCount).to.equal(1);
  });

});
```

### Stubs

Stubs are like spies except they have a pre-programmed behavior. The original function is not actually called when it is wrapped by a stub, instead the stub caries out the pre-programmed behavior. This is great for faking AJAX requests. Another great use of stubs is altering the flow of a feature to test an edge-case or even to test the error-handling.

```javascript
// FooBar.spec.js

...

const fooAjax = () => {
  return fetch('/endpoint')
    .then(res => {
      return res.json();
    })
    .then(bar => {
      return bar;
    })
    .catch(err => {
      return err;
    });
};

...

describe('FooBar', () => {

  it('does fooAjax', () => {
    fakeFetch = sinon.stub(window, 'fetch');
    fakeFetch.returnsPromise().resolves({
      id: 1234,
      tag: 'tag',
    });

    const barPromise = fooAjax();
    barPromise.then(bar => {
      expect(bar.tag).to.include('tag');
    });
  });

});
```

### Mocks

Mocks are like stubs because they get everything that spies have and throw out the original function. Not only do mocks have a pre-programmed behavior they also have expectations on what the mock has to expect and verify before. A mock will fail your test if not used as expected. Mocks are great to use when you want to control how the code is being used by stating expectations upfront. You should never have more than one mock (possibly with several expectations) in a single test.

```javascript
// FooBar.spec.js

...

describe('FooBar', () => {

  it('calls fooAjax once', () => {
    cont mock = sinon.mock(window)
    mock.expects('fetch').once();
    fakeFetch = sinon.stub(window, 'fetch');
    fakeFetch.returnsPromise().resolves({});

    const barPromise = fooAjax();
    barPromise.then(bar => {
      mock.verify();
      assert.equal(fakeFetch.calledOnce);
    });
  });

});
```

## Testing React

Testing React requires the ability to render and view the output in an actual DOM. To help us with this we use JSDom for our headless browser and Karma to run out code in the environments we create to test in. To traverse the DOM via our React components and make assertions based on the output we use Enzyme. Enzyme allows us to use jquery-like syntax to build and select DOM elements. Enzyme has both shallow and deep rendering, keeping test times down.

A few tips for testing React:
1. When writing tests for dumb components, keep the number of tests down to the absolute minimum. Sometimes this means just writing a test to see if the component renders
2. Avoid testing implementation details like tag, element or attributes
3. If you need to test logic inside of simple components, you should think about a refactor
4. Anytime you find yourself testing some functionality for a feature or component by hand, write a test for that functionality

*Check if a Component rendered*
```javascript

...

  it('should render', () => {
    // mount() is provided by enzyme
    const wrapper = shallow(<Example />);
    expect(wrapper).to.have.length(1);
  });

...

```

*Check if child component is rendered*
```javascript

...

  it('should render SubComponent', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper.find(SubComponent)).to.have.length(1);
  });

...

```

## Testing Redux

Testing features built with Redux is a little trickier than testing dumb React components. When we test a container that has been wrapped by react-redux's connect object we need to use the Redux testing tools. Having the ability to dispatch actions to a store that is also inserted into a container is paramount to making sure the features that we build are architected as intended.

A few tips for testing Redux:
1. Always test reducers. Same data in, same data out
2. Only test action-creators, indeirectly, through testing the reducer
3. Test all async action creators thoroughly. Both unit and thorough integration tests here
4. Smaller connected containers can be tested with integration tests only. Larger ones might need unit tests and will most often need e2e tests
5. Try to catch all edge-cases while testing reducers

*Example Test*
```javascript
// actions.js

...

  export function addTodo(text) {
    return {
      type: ADD_TODO,
      text,
      completed: false,
    };
  };

...

// reducer.js

...

export default todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: action.completed,
        }
      ];
    case default:
      return state;
  }
};

...

// Example.spec.js

it('should handle ADD_TODO', () => {
    expect(
      todos([], addTodo('Test AddTodo') // use the action creator
    ).toEqual([
      {
        text: 'Test AddTodo',
        completed: false,
      }
    ]);
})

```

## Testing Utilities

This section will be expanded upon at a later date.

## Testing Services

This section will be expanded upon at a later date.

## Vendor Files

This section will be expanded upon at a later date.

