import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

// Components
import { SiteHeader } from '/src/Components/Organisms/SiteHeader';
import { MainHeader } from '/src/Components/Atoms/Typography';
import { HeaderNav } from '/src/Components/Molecules/Nav';


/**
 * SiteHeader Tests
 *
 */

describe('<SiteHeader />', () => {

  it('should render', () => {

    const title = 'Title';
    const subtitle = 'Subtitle';

    const wrapper = mount(
      <SiteHeader title={ title } subtitle={ subtitle } />
    );

    expect(wrapper).to.have.length(1);
  });

  it('should contain <MainHeader />', () => {

    const title = 'Title';
    const subtitle = 'Subtitle';

    const wrapper = mount(
      <SiteHeader title={ title } subtitle={ subtitle } />
    );

    expect(wrapper.find(MainHeader)).to.have.length(1);
  });

  it('should contain <HeaderNav />', () => {

    const title = 'Title';
    const subtitle = 'Subtitle';

    const wrapper = mount(
      <SiteHeader title={ title } subtitle={ subtitle } />
    );

    expect(wrapper.find(HeaderNav)).to.have.length(1);
  });

});
