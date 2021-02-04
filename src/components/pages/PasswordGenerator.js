import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/PasswordGenerator.css';

class PasswordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    copyMessage: 'Password copied to clipboard.',
  });

  resetState = () => {
    this.setState(this.getInitialState());
  };

  state = {
    userInput: '',
    copied: '',
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

    // Limit password to no more than 50 characters (cannot be less than 0).
    if (stringLength > 50 || stringLength < 1) {
      document.getElementById('warning').innerHTML =
        'Please enter a number between 1 and 50.';
    }
  };

  createPassword = (event) => {
    this.setState({ copied: '' });
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
    document.getElementById('copy-icon').style.display = 'inline';

    // Do not print if value entered is more than 50, or less than 1.
    if (stringLength > 50 || stringLength < 1) {
      document.getElementById('password').innerHTML = '';
      document.getElementById('copy-icon').style.display = 'none';
    }

    // Do not display copy icon if nothing is entered but button is clicked.
    if (stringLength === '') {
      document.getElementById('copy-icon').style.display = 'none';
    }

    // Do not display copy icon if something other than a number is entered.
    if (isNaN(stringLength)) {
      document.getElementById('copy-icon').style.display = 'none';
    }
  };

  // Copy password to clipboard.
  // https://stackoverflow.com/questions/56624676/copy-text-between-p-tags-to-clipboard-in-react
  // https://codesandbox.io/s/wonderful-bird-9rxv3?file=/src/index.js:924-968
  copyToClipboard = async (e) => {
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(this.textContent);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    this.setState({ copied: true });
    // Can put toast / pop up message here?
    // alert('Copied');

    setTimeout(() => {
      this.setState({ copyMessage: '' });
    }, 5000);

    // Reset state of message to be able to get message again when copying more than once.
    this.resetState({ copyMessage: '' });
  };
  initRef = (c) => (this.textContent = c);

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
            Please select the length of your password, from 1 to 50 characters.
          </p>
          <br />
          <button
            style={{
              backgroundColor: `${this.props.buttonColor}`,
            }}
            id='pw-btn'
            onClick={this.createPassword}
          >
            Generate Password
          </button>

          <div className='pw-div'>
            <i
              id='copy-icon'
              onClick={this.copyToClipboard}
              className='far fa-copy'
            ></i>

            <p ref={(c) => (this.textContent = c)} id='password'>
              {this.state.string}
            </p>
          </div>
          <div className='copy-msg'>
            {this.state.copied && <p>{this.state.copyMessage}</p>}
          </div>

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
