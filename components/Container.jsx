import React from 'react';
import Display from './Display.jsx';
import Keypad from './Keypad.jsx';
import { connect } from 'react-redux';
import $ from 'jquery';

function mapStateToProps (state) {
  return {
    input: state.input,
    output: state.output
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: (e) => {
      dispatch({ type: 'CLICK_BUTTON', val: $(e.target).text() })
    },
    calculateResult: () => {
      dispatch({ type: 'CALCULATE_RESULT' })
    },
    clearInputField: () => {
      dispatch({ type: 'CLEAR_DISPLAY' })
    }
  }
}

class Container extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Display
          input={this.props.input}
          output={this.props.output}
        />
        <Keypad
          onClick={this.props.onClick}
          calculateResult={this.props.calculateResult}
          clearInputField={this.props.clearInputField}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
