import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';


// Redux
import configureStore from '/src/store';
import * as actions from '/src/Features/GithubSearch/actions';

// Components
import { GithubSearchContainer } from '/src/Features/GithubSearch';
import { SearchForm } from '/src/Components/Organisms/SearchForm';

/**
 * GithubSearch Tests
 *
 */

describe('<GithubSearchContainer /> End to End', () => {

  let store;
  let stubFetch;

  // Redux Store
  beforeEach(() => {

    // Fake Store
    store = configureStore({
      githubUser: {
        profile: {},
        repos: [],
        isFetching: false,
      },
      messages: {
        error: '',
      },
    });

    // Fake Fetch
    stubFetch = sinon.stub(window, 'fetch');
    stubFetch.returnsPromise().resolves({
      login: 'Jumballaya',
      id: 7865199,
      avatar_url: 'https://avatars.githubusercontent.com/u/7865199?v=3',
      url: '',
      name: 'Patrick Burris',
      public_repos: 67,
    });
  });

  it('should dispatch correct action', () => {

    // Create wrapper
    const wrapper = mount(
      <GithubSearchContainer store={ store } />
    );

    // Watch Redux
    const unsubscribe = store.subscribe(() => {
      store.getState();
    });

    // Get elements
    const form = wrapper.find(SearchForm);
    const textInput = form.find('input');

    // Set search text and search
    textInput.value = 'Jumballaya';
    form.simulate('submit');

    unsubscribe();
  });

});

