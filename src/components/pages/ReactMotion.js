import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

class ReactMotion extends Component {
  state = {
    showElement: false,
  };

  render() {
    const styles = {
      fontSize: '16px',
    };
    return (
      <div>
        <Helmet>
          <title>Reactathon | React Motion</title>
        </Helmet>
        <Container>
          <div className='App'>
            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              <strong>React Motion</strong>
            </h3>
            <div>
              <p style={styles}>
                View the video&nbsp;
                <a
                  href='https://www.youtube.com/watch?v=ZUbUgSQqjD4'
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
                    Introduction to React Motion Tutorial &nbsp;| &nbsp;
                    <a
                      href='https://www.leighhalliday.com/introduction-react-motion-tutorial'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      View
                    </a>
                  </li>
                  <li>
                    React Motion &nbsp;| &nbsp;
                    <a
                      href='https://github.com/chenglou/react-motion'
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
              <div style={{ marginBottom: '40px' }}>
                <Row>
                  <Col md={4}>
                    <Button
                      style={{ marginRight: '10px' }}
                      onClick={() => this.setState({ showElement: true })}
                      variant='outline-dark'
                    >
                      Show
                    </Button>

                    {/* Optional button - this can be taken out if it's not needed: */}
                    <Button
                      onClick={() => this.setState({ showElement: false })}
                      variant='outline-dark'
                    >
                      Hide
                    </Button>
                  </Col>
                </Row>
              </div>

              <Row>
                <Col md={6}>
                  {/* Using the 'defaultStyle' prop -> x: -200 (this will begin off to the left of the screen at -200); opacity will start at 0.
                Use the 'style' prop to say where we want to animate the default values TO -
                we want it to animate to '0' - so, on the screen, where it's supposed to be */}
                  <Motion
                    defaultStyle={{ x: -200, opacity: 0 }}
                    style={{
                      x: spring(this.state.showElement ? 0 : -200),
                      opacity: spring(this.state.showElement ? 1 : 0),
                    }}
                  >
                    {/* Pass a function, which will take the current value of the style.
                      And then we return the component that we want to render (here, it's a Card),
                      and use inline styles. */}
                    {(style) => (
                      //   Inline styling is typically the best way to use the React Motion styles
                      // <Card style={{ opacity: style.opacity, width: '18rem' }}>
                      <Card
                        style={{
                          width: '18rem',
                          transform: `translateX(${style.x}px)`,
                          opacity: style.opacity,
                        }}
                      >
                        <Card.Img
                          variant='top'
                          src='https://images.pexels.com/photos/3014826/pexels-photo-3014826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                        <Card.Body>
                          <Card.Title>
                            <strong>Lorem Ipsum</strong>
                          </Card.Title>
                          <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </Card.Text>
                          <Button variant='dark'>Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    )}
                  </Motion>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ReactMotion;
