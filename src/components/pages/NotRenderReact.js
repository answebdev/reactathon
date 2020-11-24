import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/NotRenderReact.css';

const NotRenderReact = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          <strong>Not Render React</strong>
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=-6bNH0Ne9EU'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/leighhalliday/not-render-react'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
          </p>
          <hr />
        </div>
        Not Render React
      </div>
    </Container>
  );
};

export default NotRenderReact;
