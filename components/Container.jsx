import React from 'react';
import Display from './Display.jsx';
import Keypad from './Keypad.jsx';
import $ from 'jquery';

function isNumericInput(input) {
  return input.match(/^\d*\.?\d*$/);
}

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: '0'
    };
    this.onClick = this.onClick.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.clearInputField = this.clearInputField.bind(this);
  }

  calculateResult() {
    this.setState({
      input: '',
      output: eval(this.state.input).toString()
    });
  }

  onClick(e) {
    let input = $(e.target).text();
    // If input is number, no space, otherwise 1 space
    // between characters
    if (isNumericInput(input)) {
      input = `${this.state.input}${input}`;
    } else {
      input = `${this.state.input} ${input} `;
    }

    this.setState({ input });
  }

  clearInputField() {
    this.setState({
      input: '',
      output: '0'
    });
  }

  render() {
    return (
      <div className="main-container">
        <Display
          input={this.state.input}
          output={this.state.output}
        />
        <Keypad
          onClick={this.onClick}
          calculateResult={this.calculateResult}
          clearInputField={this.clearInputField}
        />
      </div>
    );
  }
}