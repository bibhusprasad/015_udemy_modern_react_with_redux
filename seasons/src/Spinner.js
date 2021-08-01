//import the React and ReactDOM
import React from 'react';

//create a react component
const Spinner = (props) => {
  return (
    <div class='ui active dimmer'>
      <div class='ui big text loader'>{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
