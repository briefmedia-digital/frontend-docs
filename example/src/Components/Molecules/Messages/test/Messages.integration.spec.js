import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

// Messages
import {
  ErrorMessage,
} from '../Messages';


/**
 * Message Tests
 *
 * 1. ErrorMessage
 *
 */

describe('<ErrorMessage />', () => {

  it('should render', () => {

    const wrapper = mount(
      <ErrorMessage
        message="Error Message"
        onClick={ sinon.spy() } />
    );

    expect(wrapper).to.have.length(1);
  });

  it('should display correct error message', () => {

    const onClick = sinon.spy();
    const wrapper = mount(
      <ErrorMessage
        message="Error Message"
        onClick={ onClick } />
    );
    expect(wrapper.text()).to.equal('Error Message');
  });

  it('should fire onClick when clicked', () => {

    const onClick = sinon.spy();
    const wrapper = mount(
      <ErrorMessage
        message="Error Message"
        onClick={ onClick } />
    );
    wrapper.simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });

});
