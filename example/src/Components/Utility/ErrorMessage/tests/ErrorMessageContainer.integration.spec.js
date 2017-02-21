import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

// Redux
import configureStore from '/src/store';
import * as actions from '/src/Components/Utility/ErrorMessage/actions';

// Components
import {
  ErrorMessageUtil,
  ErrorMessageContainer,
} from '/src/Components/Utility/ErrorMessage';


/**
 * ErrorMessage Tests
 *
 * 1. ErrorMessageUtil - Non-connected component
 * 2. ErrorMessageContainer - Connected component
 */

describe('<ErrorMessageUtil />', () => {

  it('should render', () => {

    const message = 'Message';

    const wrapper = mount(
      <ErrorMessageUtil errorMessage={ message } />
    );

    expect(wrapper).to.have.length(1);
  });

});

describe('<ErrorMessageContainer />', () => {

  it('should render', () => {

    const message = 'Message';

    // Dummy Redux store
    const store = configureStore({
      messages: {
        error: message,
      },
    });
    const wrapper = mount(
      <ErrorMessageContainer store={ store } />
    );
    expect(wrapper).to.have.length(1);
  });

  it('should map state to props', () => {

    const message = 'Message';

    // Dummy Redux store
    const store = configureStore({
      messages: {
        error: message,
      },
    });
    const wrapper = shallow(
      <ErrorMessageContainer store={ store } />
    );
    expect(wrapper.props().errorMessage).to.equal('Message');
  });

  it('should map dispatch to props', () => {

    const message = 'Message';

    // Dummy Redux store
    const store = configureStore({
      messages: {
        error: message,
      },
    });

    // Create wrapper
    const wrapper = shallow(
      <ErrorMessageContainer store={ store } />
    );
    expect(wrapper.props()).to.respondTo('clearError');
  });

  it('should dispatch correct action', () => {

    const message = 'Message';

    // Dummy Redux store
    const store = configureStore({
      messages: {
        error: message,
      },
    });
    const dispatchSpy = sinon.spy();
    store.dispatch = dispatchSpy;

    // Create wrapper
    const wrapper = shallow(
      <ErrorMessageContainer store={ store } />
    );

    // Message should equal Message
    expect(wrapper.props().errorMessage).to.equal('Message');

    // Simulate clicking on message
    wrapper.props().clearError();

    // Check if the dispatch was called with correct action
    const expectedAction = actions.clearError();
    const spyLastCall = dispatchSpy.args[0][0];
    expect(spyLastCall.type).to.be.eql(expectedAction.type);
  });

});
