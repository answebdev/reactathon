import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const styles = {
  fontSize: '16px',
};

const ReduxHooks = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Reactathon | Redux Hooks</title>
      </Helmet>
      <Container>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Redux Hooks</strong>
          </h3>
          <p>
            The application on this page uses Redux and Redux Hooks the manage
            the state.
          </p>
          <div>
            <p>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=3zoIigieur0'
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
                  Redux (NPM) &nbsp;| &nbsp;
                  <a
                    href='https://www.npmjs.com/package/redux'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  React Redux (NPM) &nbsp;| &nbsp;
                  <a
                    href='https://www.npmjs.com/package/react-redux'
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
          <div style={{ marginBottom: '40px' }}>
            <h3>
              <strong>Counter:</strong> {counter}
            </h3>
            <br />
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
              INCREMENT
            </button>
            &nbsp;
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
              DECREMENT
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReduxHooks;
