import React from 'react';
import { Container } from 'react-bootstrap';

const ReactReCaptcha = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          Using reCAPTCHA in React and Node
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=vrbyaOoZ-4Q&t=37s'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/leighhalliday/react-hook-form-demo'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
          </p>
          <p style={styles}>
            Resources:
            <ul>
              <li>
                reCAPTCHA &nbsp;| &nbsp;
                <a
                  href='https://www.google.com/recaptcha/about/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
            </ul>
          </p>
          <hr />
        </div>
      </div>
    </Container>
  );
};

export default ReactReCaptcha;
