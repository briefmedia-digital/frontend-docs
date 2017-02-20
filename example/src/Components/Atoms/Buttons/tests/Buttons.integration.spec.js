import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// Buttons
import {
  FlatButton,
} from '/src/Components/Atoms/Buttons';


/**
 * Buttons Tests
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
