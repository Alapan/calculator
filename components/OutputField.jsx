import React from 'react';
import PropTypes from 'prop-types';

export default class OutputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
   }

  componentWillReceiveProps(nextProps) {
    if (this.props.result !== nextProps.result) {
      this.setState({ result });
    }
  }

  render() {
    return (
      <input type="text"
        value={this.state.result}
      />
    );
  }
}

OutputField.propTypes = {
  result: PropTypes.string
}
