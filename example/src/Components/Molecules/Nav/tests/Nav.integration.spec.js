import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

// Messages
import HeaderNav from '../HeaderNav';


/**
 * Message Tests
 *
 * 1. ErrorMessage
 *
 */

describe('<HeaderNav />', () => {

  it('should render', () => {

    const wrapper = mount(
      <HeaderNav />
    );

    expect(wrapper).to.have.length(1);
  });

});
