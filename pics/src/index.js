//import the React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//live run
if (module.hot) {
  module.hot.accept();
}

//Take the React component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));
