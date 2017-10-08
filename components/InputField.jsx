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
    if (this.props.input !== nextProps.input) {
      this.setState({ input });
    }
  }

  render() {
    return (
      <input type="text" value={this.state.input}/>
    );
  }
}

InputField.propTypes = {
  input: PropTypes.string
}
