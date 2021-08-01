//import the React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

//create a react component
const buttonText = 'Click Me!';
const App = () => {
  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter name:
      </label>
      <input id='name' type='test' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

//Take the React component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));
