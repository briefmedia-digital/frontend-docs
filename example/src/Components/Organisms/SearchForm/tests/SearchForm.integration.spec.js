import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

// Components
import SearchForm from '../SearchForm';
import { FlatButton } from '/src/Components/Atoms/Buttons';


/**
 * SearchForm Tests
 *
 */

describe('<SearchForm />', () => {

  it('should render', () => {

    const wrapper = mount(
      <SearchForm />
    );

    expect(wrapper).to.have.length(1);
  });

  it('should contain a form', () => {

    const wrapper = mount(
      <SearchForm />
    );
    const form = wrapper.find('form');
    expect(form).to.have.length(1);
  });

  it('should run handleSubmit', () => {

    const spy = sinon.spy();
    const wrapper = mount(
      <SearchForm handleSubmit={ spy } />
    );
    const input = wrapper.find('input[type="text"]');
    input.value = 'Terrillo';
    wrapper.simulate('submit');
    expect(spy.called).to.be.true;
  });

});
