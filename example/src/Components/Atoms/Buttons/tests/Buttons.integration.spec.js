import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

// Headers
import {
  FlatButton,
} from '../Buttons';


/**
 * Headers Tests
 *
 * 1. FlatButton
 *
 */

describe('<FlatButton />', () => {

  it('should render', () => {

    const wrapper = shallow(<FlatButton value="Submit" />);
    expect(wrapper).to.have.length(1);
  });

});
