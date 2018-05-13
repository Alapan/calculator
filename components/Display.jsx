import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDisplay: '0',
      outputDisplay: '',
      displayResult: false
    };
  }

  static isNumericInput(input) {
    return input.match(/^\d*\.?\d*$/);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.output !== prevState.outputDisplay) {
      return {
        inputDisplay: '0',
        outputDisplay: nextProps.output,
        displayResult: true
      }
    } else {
      // If input is number, no space, otherwise 1 space
      // between characters
      if (Display.isNumericInput(nextProps.input)) {
        if (prevState.inputDisplay === '0') {
          prevState.inputDisplay = '';
        }

        return {
          inputDisplay: `${prevState.inputDisplay}${nextProps.input}`,
          displayResult: false
        }
      }
      return {
        inputDisplay: `${prevState.inputDisplay} ${nextProps.input} `,
        displayResult: false
      }
    }
  }

  render() {
    this.props.updateInputOperation(this.state.inputDisplay);
    const { inputDisplay, outputDisplay, displayResult } = this.state;

    const display = displayResult ? outputDisplay : inputDisplay;
    return (
      <input
        type="text"
        value={display}
        readOnly
      />
    );
  }
}

Display.propTypes = {
  input: PropTypes.string,
  updateInputOperation: PropTypes.func.isRequired,
  output: PropTypes.string
};
