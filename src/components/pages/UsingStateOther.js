import React, { useState } from 'react';

const UsingStateOther = (props) => {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{
          marginBottom: '20px',
          backgroundColor: 'steelblue',
          color: '#ffffff',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
        onClick={props.textChange}
      >
        Change Greeting
      </button>

      <br />

      <button onClick={props.modaled}>MODAL</button>

      <br />

      <button
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          backgroundColor: buttonColor,
          color: '#ffffff',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change Color to {newButtonColor}
      </button>

      {/* <button
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          backgroundColor: 'dodgerblue',
          color: '#ffffff',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
        disabled={disabled}
      >
        CLICK
      </button> */}
      <br />
      <input
        id='enable-button-checkbox'
        type='checkbox'
        defaultChecked={disabled}
        // For accessibility - so screen readers can see whether or not it's checked:
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
};

export default UsingStateOther;
