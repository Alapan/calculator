import React from 'react';
import PropTypes from 'prop-types';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input) {
      const updatedInput = this.state.input + ' ' + nextProps.input;
      this.setState({
        input: updatedInput
      });
      this.props.updateInputOperation(updatedInput);
    } else {
      this.setState({
        input: ''
      });
    }
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.input}
        placeholder='0'
      />
    );
  }
}

InputField.propTypes = {
  input: PropTypes.string,
  updateInputOperation: PropTypes.func.isRequired
}
