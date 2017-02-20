import React, { Component, PropTypes } from 'react';
import { FlatButton } from '/src/Components/Atoms/Buttons';


const inputClasses = "f6 f5-l input-reset bn fl black-80 pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns bg-light-gray";

/**
 * Header Navigation
 *
 * @description Main navigation for the site, present in the header
 */
export default class SearchForm extends Component {

  constructor(props) {

    super(props);
    this.textInput = '';
  }

  render() {

    return (
      <form
        className="mw12 center"
        onSubmit={ e => {
          e.preventDefault();
          const name = this.textInput.value;
          this.props.handleSubmit(name);
          this.textInput.value = '';
        }}>

        <fieldset className="cf bn ma0 pa0">
          <legend className="pa0 f5 f4-ns mb3 black-80">Search for a github user</legend>
          <div className="cf">
            <label className="clip" htmlFor="userName">Username</label>

            <input
              className={ inputClasses }
              placeholder="Github User Name"
              type="text"
              name="userName"
              ref={ input => {
                this.textInput = input;
              } }
              id="userName" />

            <FlatButton value="Search" />
          </div>
        </fieldset>
      </form>
    );
  }

}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
