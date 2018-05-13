import React from 'react';
import Display from './Display.jsx';
import Keypad from './Keypad.jsx';
import $ from 'jquery';

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: ''
    };
    this.onClick = this.onClick.bind(this);
    this.updateInputOperation = this.updateInputOperation.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.clearInputField = this.clearInputField.bind(this);
    this.userInput = '';
  }

  updateInputOperation(userInput) {
    this.userInput = userInput;
  }

  calculateResult() {
    this.setState({
      output: eval(this.userInput).toString()
    });
  }

  onClick(e) {
    this.setState({
      input: $(e.target).text()
    });
  }

  clearInputField() {
    this.userInput = '';
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
          updateInputOperation={this.updateInputOperation}
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