function isNumericInput(input) {
  return input.match(/^\d*\.?\d*$/);
}

const initialState = {
  input: '',
  output: '0'
};

const reducer = (state=initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case 'CLICK_BUTTON':
      let input = action.val;
	    if (isNumericInput(input)) {
	      input = `${newState.input}${input}`;
	    } else {
	      input = `${newState.input} ${input} `;
	    }

	    newState.input = input;
      return newState;

    case 'CALCULATE_RESULT':
      newState.output = eval(newState.input).toString()
      newState.input = ''
      return newState;

    case 'CLEAR_DISPLAY':
      newState.input = '';
      newState.output = '0';
      return newState;

    default:
      return newState;
  }
}
export default reducer;
