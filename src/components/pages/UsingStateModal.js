import React from 'react';
import classes from '../styles/Modal.module.css';
import UsingStateModalBackdrop from './UsingStateModalBackdrop';

const modal = (props) => (
  <div>
    <UsingStateModalBackdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      THIS IS A MODAL
    </div>
  </div>
);

export default modal;
