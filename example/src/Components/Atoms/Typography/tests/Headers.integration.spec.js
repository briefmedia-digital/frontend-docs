import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

// Headers
import {
  MainHeader,
  ProfileHeader,
  SectionHeader,
} from '../Headers';


/**
 * Headers Tests
 *
 * 1. MainHeader
 * 2. ProfileHeader
 * 3. SectionHeader
 *
 */

/**
 * Setting up the test:
 *
 * Break up tests based on components
 */
describe('<MainHeader />', () => {

  /**
   * Inside the tests you can set up before/after hooks. This is useful for things like spies/mocks/stubs, redux wrappers, etc.
   * Components like these will generally have a single integration test
   * beforeEach(), afterEach(), before() and after()
   */
  it('should render', () => {

    const wrapper = mount(<MainHeader />);
    expect(wrapper).to.have.length(1);
  });

});

describe('<ProfileHeader />', () => {

  it('should render', () => {

    const wrapper = shallow(<ProfileHeader />);
    expect(wrapper).to.have.length(1);
  });

});

describe('<SectionHeader />', () => {

  it('should render', () => {

    const wrapper = shallow(<SectionHeader />);
    expect(wrapper).to.have.length(1);
  });

});
