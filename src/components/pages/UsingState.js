import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Button } from 'react-bootstrap';
import UsingStateOther from './UsingStateOther';
import UsingStateModal from './UsingStateModal';

class UsingState extends Component {
  state = {
    text: 'What is the date today?',
    greeting: 'Hello',
    modal: false,
  };

  textHandler = () => {
    this.setState({ text: '12/25/2020' });
  };

  greetingHandler = () => {
    this.setState({ greeting: 'Goodbye' });
  };

  modalHandler = () => {
    this.setState({ modal: true });
  };

  modalCloseHandler = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Reactathon | Using State</title>
        </Helmet>
        <Container>
          <div className='App'>
            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              <strong>Using State</strong>
            </h3>
            <hr />

            <p style={{ fontSize: '18px' }}>
              <strong>Text:</strong> {this.state.text}
            </p>
            <p>
              <strong>Text 2:</strong> {this.state.greeting}
            </p>
            <Button style={{ marginBottom: '20px' }} onClick={this.textHandler}>
              Click Here
            </Button>
            <UsingStateOther
              textChange={this.greetingHandler}
              modaled={this.modalHandler}
            />
            <UsingStateModal
              show={this.state.modal}
              modalClosed={this.modalCloseHandler}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default UsingState;
