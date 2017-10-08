import React from 'react';
import InputField from './InputField.jsx';
import OutputField from './OutputField.jsx';
import Button from './Button.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div className="main-container">
        <InputField input='0' />
        <OutputField result='' />
        <Button
          isInput={false}
          onClick={ (e) => console.log(e)}
          label='1'
        />
      </div>
    );
  }
}