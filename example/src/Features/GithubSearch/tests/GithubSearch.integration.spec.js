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

describe('<GithubSearchContainer />', () => {

  let store;

  // Redux Store
  beforeEach(() => {

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

  })

  it('should render', () => {

    const wrapper = mount(
      <GithubSearchContainer store={ store } />
    );
    expect(wrapper).to.have.length(1);
  });

  it('should contain <SearchForm />', () => {

    const wrapper = mount(
      <GithubSearchContainer store={ store } />
    );

    expect(wrapper.find(SearchForm)).to.have.length(1);

  });

  it('should map state to props', () => {

    const wrapper = shallow(
      <GithubSearchContainer store={ store } />
    );

    expect(wrapper.props().isFetching).to.equal(false);
  });

  it('should map dispatch to props', () => {

    // Create wrapper
    const wrapper = shallow(
      <GithubSearchContainer store={ store } />
    );
    expect(wrapper.props()).to.respondTo('fetchUser');
  });

  it('should dispatch correct action', () => {

    const dispatchSpy = sinon.spy();
    store.dispatch = dispatchSpy;

    // Create wrapper
    const wrapper = shallow(
      <GithubSearchContainer store={ store } />
    );

    // Run prop function to dispatch action
    wrapper.props().fetchUser('Jumballaya');

    // Check if the dispatch was called with correct action
    const expectedAction = actions.githubFetchUser();
    const spyLastCall = dispatchSpy.args[0][0];
    expect(spyLastCall.type).to.be.eql(expectedAction.type);
  });

});
