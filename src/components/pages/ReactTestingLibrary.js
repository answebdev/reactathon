import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

export default function ReactTestingLibrary({ text }) {
  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | React Testing Library</title>
      </Helmet>
      <Container>
        <div style={{ marginBottom: '40px' }} className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>React Testing Library</strong>
          </h3>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=YQLn7ycfzEo'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              . See the article and code&nbsp;
              <a
                href='https://www.leighhalliday.com/introduction-react-testing-library'
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
                  Testing Library &nbsp;| &nbsp;
                  <a
                    href='https://testing-library.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  React Testing Library (NPM) &nbsp;| &nbsp;
                  <a
                    href='https://www.npmjs.com/package/@testing-library/react'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  Jest-Dom (adds on different 'expects' we can use with Jest -
                  little helpers) &nbsp;| &nbsp;
                  <a
                    href='https://github.com/testing-library/jest-dom'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
              </ul>
            </p>
            <hr />
            <header>
              <h1 data-testid='h1tag' className='fancy-h1'>
                {text}
              </h1>
            </header>
          </div>
        </div>
      </Container>
    </div>
  );
}

// export default ReactTestingLibrary;
