import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Display extends React.Component {

  render() {
    if (this.props.input == '') {
      return (
        <input
          type='text'
          value={this.props.output}
          readOnly
        />
      );
    }
    return (
      <input
        type="text"
        value={this.props.input}
        readOnly
      />
    );
  }
}

Display.propTypes = {
  input: PropTypes.string,
  output: PropTypes.string
};
