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
      <div data-testid='using-state-component'>
        <Helmet>
          <title>Reactathon | Using State</title>
        </Helmet>
        <Container>
          <div className='App'>
            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              <strong>Using State</strong>
            </h3>
            <hr />

            <p data-testid='date' style={{ fontSize: '18px' }}>
              <strong>Text 1:</strong> {this.state.text}
            </p>
            <p data-testid='greeting'>
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
              data-testid='modal'
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

// Get Greeting button using the 'useState' hook:

// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Container, Button } from 'react-bootstrap';
// import UsingStateOther from './UsingStateOther';
// import UsingStateModal from './UsingStateModal';

// const UsingState = () => {
//   const [greeting, setGreeting] = useState('Hello');

//   function getGreeting() {
//     setGreeting('Goodbye');
//   }

//   return (
//     <div className='App'>
//       <p>{greeting}</p>
//       <Button onClick={() => getGreeting()}>Get Greeting</Button>
//     </div>
//   );
// };

// export default UsingState;
