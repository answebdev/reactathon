import React from 'react';

const UsingStateOther = (props) => {
  return (
    <div>
      <button style={{ marginBottom: '20px' }} onClick={props.textChange}>
        Change Greeting
      </button>
      <br />
      <button onClick={props.modaled}>MODAL</button>
    </div>
  );
};

export default UsingStateOther;
