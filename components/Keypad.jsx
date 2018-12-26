import React from 'react';
import Button from './Button.jsx';
import PropTypes from 'prop-types';

export default class Keypad extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick} label='0' />
        <Button onClick={this.props.onClick} label='1' />
        <Button onClick={this.props.onClick} label='2' />
        <Button onClick={this.props.onClick} label='3' />
        <Button onClick={this.props.onClick} label='4' />
        <Button onClick={this.props.onClick} label='5' />
        <Button onClick={this.props.onClick} label='6' />
        <Button onClick={this.props.onClick} label='7' />
        <Button onClick={this.props.onClick} label='8' />
        <Button onClick={this.props.onClick} label='9' />
        <Button onClick={this.props.onClick} label='.' />
        <Button onClick={this.props.onClick} label='+' />
        <Button onClick={this.props.onClick} label='-' />
        <Button onClick={this.props.onClick} label='*' />
        <Button onClick={this.props.onClick} label='/' />
        <Button onClick={this.props.onClick} label='(' />
        <Button onClick={this.props.onClick} label=')' />
        <Button onClick={this.props.clearInputField} label='CL' />
        <Button onClick={this.props.calculateResult} label='=' />
      </div>
    )
  }
}

Keypad.propTypes = {
  onClick: PropTypes.func,
  clearInputField: PropTypes.func,
  calculateResult: PropTypes.func
}