import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}><Container /></Provider>,
  document.getElementById('content')
);
