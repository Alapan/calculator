import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    return (
      <button type="button"
        className={this.props.isInput ? 'input' : 'action'}
        onClick={this.props.onClick}
      >{this.props.label}</button>
    );
  }
}

Button.propTypes = {
  isInput: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string
};
