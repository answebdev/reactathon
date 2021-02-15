import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

export default function Clickers() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };

  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Clickers</title>
      </Helmet>
      <Container>
        <div style={{ marginBottom: '40px' }} className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>React Testing Library: Clickers</strong>
          </h3>
          <p>How to trigger and test click events.</p>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=SSyy2sHpmIA'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .<br /> See the article and code ("Firing Events in React Testing
              Library")&nbsp;
              <a
                href='https://www.leighhalliday.com/firing-events-react-testing-library'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .<br />
              See the article and code ("Async code... waiting for an
              element")&nbsp;
              <a
                href='https://www.leighhalliday.com/async-axios-react-testing-library'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .
            </p>
            <hr />
            <div>
              <button onClick={increase}>Up</button>
              <button onClick={decrease}>Down</button>
              <span data-testid='count'>{count}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

// export default ReactTestingLibrary;
