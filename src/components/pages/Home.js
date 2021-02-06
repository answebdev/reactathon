import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
// import logo from '../../img/reactathon.png';
import { useSpring, animated } from 'react-spring';
import '../../App.css';

// React-Spring:
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Home = () => {
  // React-Spring:
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

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
                  React Pagination &nbsp;| &nbsp;
                  <a href='/react-pagination'>View</a>
                </li>
                <li style={styles}>
                  React Motion &nbsp;| &nbsp;
                  <a href='/react-motion'>View</a>
                </li>
                <li style={styles}>
                  React Spring &nbsp;| &nbsp;
                  <a href='/react-spring'>View</a>
                </li>
                <li style={styles}>
                  React Transition Group &nbsp;| &nbsp;
                  <a href='/react-transition-group'>View</a>
                </li>
                <li style={styles}>
                  Using State &nbsp;| &nbsp;
                  <a href='/using-state'>View</a>
                </li>
                <li style={styles}>
                  Password Generator &nbsp;| &nbsp;
                  <a href='/password-generator'>View</a>
                </li>
                <li style={styles}>
                  Music Albums &nbsp;| &nbsp;
                  <a href='/music-albums'>View</a>
                </li>
                <li style={styles}>
                  Search Form &nbsp;| &nbsp;
                  <a href='/search-form'>View</a>
                </li>
                <li style={styles}>
                  Post Form &nbsp;| &nbsp;
                  <a href='/post-form'>View</a>
                </li>
              </ol>
            </div>
          </Col>
          <Col md={5}>
            <animated.div
              class='react-spring-card'
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />
            {/* <Image
              id='logo'
              alt='Reactathon Logo'
              src={logo}
              style={{
                width: '75%',
                height: 'auto',
                marginBottom: '40px',
              }}
              fluid
            /> */}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>
              <strong>Notes</strong>
            </h3>
            <p>
              The Reactathon logo was created using{' '}
              <a
                href='https://www.canva.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Canva
              </a>
              . The animation was made using&nbsp;
              <a
                href='https://www.react-spring.io/'
                rel='noopener noreferrer'
                target='_blank'
              >
                React-Spring
              </a>
              . The sandbox can be seen&nbsp;
              <a
                href='https://codesandbox.io/embed/rj998k4vmm'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .
            </p>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
