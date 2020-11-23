import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3>
          <strong>React Projects</strong>
        </h3>
        <hr />
        <div style={{ textAlign: 'left' }}>
          <h2>
            <strong>Projects</strong>
          </h2>
          <ol>
            <li style={styles}>
              Infinite Scroll &nbsp;| &nbsp;
              <a href='/infinite-scroll'>View</a>
            </li>
            <li style={styles}>
              Mapbox React &nbsp;| &nbsp;
              <a href='/mapbox-react'>View</a>
            </li>
            <li style={styles}>
              Drag n' Drop Files in React (not working) &nbsp;| &nbsp;
              <a href='/react-drag-n-drop'>View</a>
            </li>
            <li style={styles}>
              React Pagination &nbsp;| &nbsp;
              <a href='/react-pagination'>View</a>
            </li>
            <li style={styles}>
              Google Places: Autocomplete in React (need working API key)
              &nbsp;| &nbsp;
              <a href='/google-places'>View</a>
            </li>
            <li style={styles}>
              React Stripe Elements (not yet done) &nbsp;| &nbsp;
              <a href='/react-stripe-elements'>View</a>
            </li>
            <li style={styles}>
              Using reCAPTCHA in React and Node (not yet done) &nbsp;| &nbsp;
              <a href='/using-recaptcha-in-react-and-node'>View</a>
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Home;
