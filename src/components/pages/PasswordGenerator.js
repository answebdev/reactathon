import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/PasswordGenerator.css';

class PasswordGenerator extends Component {
  state = {
    userInput: '',
  };

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });

    let stringLength = document.getElementById('characters').value;
    if (isNaN(stringLength)) {
      document.getElementById('warning').innerHTML = 'Please enter a number.';
    } else {
      console.log('Valid number entered');
      document.getElementById('warning').innerHTML = '';
    }
  };

  createPassword = (event) => {
    this.setState({ userInput: event.target.value });
    let stringLength = document.getElementById('characters').value;
    console.log(stringLength);

    var string = '';
    var charList =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < stringLength; i++) {
      string += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    // Render the password
    document.getElementById('password').innerHTML = string;
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Reactathon | Password Generator</title>
        </Helmet>

        <div style={{ margin: '0 80px' }}>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Password Generator</strong>
          </h3>
          <hr />

          <input
            type='text'
            id='characters'
            placeholder='Enter a number'
            onChange={this.handleChange}
            value={this.state.userInput}
          />
          <p id='instructions'>
            Please enter the number of characters you want the password to have.
          </p>
          <br />
          <button id='pw-btn' onClick={this.createPassword}>
            Generate Password
          </button>

          <p id='password'>{this.state.string}</p>
          <p id='warning'></p>
        </div>
      </div>
    );
  }
}

export default PasswordGenerator;

// Make Generator version using the 'useState' hook:

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
