import React, { useState } from 'react';

const UsingStateOther = (props) => {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{
          marginBottom: '20px',
          backgroundColor: 'steelblue',
          color: '#ffffff',
        }}
        onClick={props.textChange}
      >
        Change Greeting
      </button>

      <br />

      <button
        style={{
          marginBottom: '20px',
          backgroundColor: buttonColor,
          color: '#ffffff',
        }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change Color to {newButtonColor}
      </button>

      <br />

      <button onClick={props.modaled}>MODAL</button>
    </div>
  );
};

export default UsingStateOther;
