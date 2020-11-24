import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import logo from '../../img/reactathon.png';

const Home = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon</title>
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ marginTop: '15px' }}>
              <h2>
                <strong>React Projects</strong>
              </h2>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={7}>
            <div style={{ textAlign: 'left' }}>
              <h3>
                <strong>Projects</strong>
              </h3>
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
                  Using reCAPTCHA in React and Node (not yet done) &nbsp;|
                  &nbsp;
                  <a href='/using-recaptcha-in-react-and-node'>View</a>
                </li>
              </ol>
            </div>
          </Col>
          <Col md={5}>
            <Image
              alt='Reactathon Logo'
              src={logo}
              style={{
                width: '75%',
                height: 'auto',
                marginBottom: '40px',
              }}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
