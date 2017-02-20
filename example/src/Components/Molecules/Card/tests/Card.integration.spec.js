import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

// Card
import Card from '../Card';


/**
 * Card Tests
 *
 */

describe('<Card />', () => {

  it('should render', () => {

    const CardInfo = {
      login: 'Name',
      name: 'Firstname Lastname',
      avatar_url: 'http://www.google.com',
      public_repos: '22',
    };

    const wrapper = mount(<Card { ...CardInfo } />);
    expect(wrapper).to.have.length(1);
  });

  it('should have an image', () => {

    const CardInfo = {
      login: 'Name',
      name: 'Firstname Lastname',
      avatar_url: 'http://www.google.com',
      public_repos: '22',
    };

    const wrapper = mount(<Card { ...CardInfo } />);
    const img = wrapper.find('img');
    expect(img).to.have.length(1);
  });

});
