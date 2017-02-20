import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

// Buttons
import Card from '../Card';


/**
 * Buttons Tests
 *
 * 1. FlatButton
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

});
