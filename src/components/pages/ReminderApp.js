import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import classes from '../styles/ReminderApp.module.css';

const ReminderApp = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Reminder App</title>
      </Helmet>
      <Container>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Reminder App</strong>
          </h3>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=AirWT_XpEpM'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              . See the code&nbsp;
              <a
                href='https://github.com/ipenywis/react-axios'
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
                  Axios &nbsp;| &nbsp;
                  <a
                    href='https://www.npmjs.com/package/axios'
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
          <h3 className={classes.MainTitle}>App</h3>
        </div>
      </Container>
    </div>
  );
};

export default ReminderApp;
