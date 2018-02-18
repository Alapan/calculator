import React from 'react';
import InputField from './InputField.jsx';
import OutputField from './OutputField.jsx';
import Keypad from './Keypad.jsx';
import $ from 'jquery';

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '0'
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
      result: eval(this.userInput).toString()
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
      result: ''
    });
  }

  render() {
    return (
      <div className="main-container">
        <InputField
          input={this.state.input}
          updateInputOperation={this.updateInputOperation}
        />
        <OutputField result={this.state.result} />
        <Keypad
          onClick={this.onClick}
          calculateResult={this.calculateResult}
          clearInputField={this.clearInputField}
        />
      </div>
    );
  }
}