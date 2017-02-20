import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

// Components
import SiteHeader from '../SiteHeader';


/**
 * SiteHeader Tests
 *
 */

describe('<SiteHeader />', () => {

  it('should render', () => {

    const wrapper = mount(
      <SiteHeader />
    );

    expect(wrapper).to.have.length(1);
  });

});
