import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import TransitionHome from './TransitionHome';
import data from '../data/data';
import { CSSTransition } from 'react-transition-group';
import '../styles/ReactTransitionGroup.css';

class ReactTransitionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0],
    };
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome,
    });
  };

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  render() {
    const { appearHome, property } = this.state;

    // const styles = {
    //   fontSize: '16px',
    // };

    return (
      <div>
        <Helmet>
          <title>Reactathon | React Transition Group</title>
        </Helmet>
        <Container>
          <div className='App'>
            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              <strong>React Transition Group</strong>
            </h3>
            {/* <div>
              <p style={styles}>
                View the video&nbsp;
                <a
                  href='https://www.youtube.com/watch?v=BZRyIOrWfHU'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  here
                </a>
                . See the code&nbsp;
                <a
                  href='https://github.com/Ihatetomatoes/react-transition-group-classes'
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
                    React Transition Group &nbsp;| &nbsp;
                    <a
                      href='https://reactcommunity.org/react-transition-group/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      View
                    </a>
                  </li>
                  <li>
                    React Transition Group NPM &nbsp;| &nbsp;
                    <a
                      href='https://www.npmjs.com/package/react-transition-group'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      View
                    </a>
                  </li>
                  <li>
                    React Transition Group (GitHub) &nbsp;| &nbsp;
                    <a
                      href='https://github.com/reactjs/react-transition-group'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      View
                    </a>
                  </li>
                </ul>
              </p>
              <hr />
            </div> */}

            <div style={{ marginBottom: '40px' }}>
              <button onClick={() => this.toggleAppear()}>
                Appear: {`${appearHome}`}
              </button>
              <button
                onClick={() => this.nextProperty()}
                disabled={property.index === data.properties.length - 1}
              >
                Next
              </button>
              <button
                onClick={() => this.prevProperty()}
                disabled={property.index === 0}
              >
                Prev
              </button>
              <CSSTransition
                in={appearHome}
                appear={true}
                timeout={1000}
                classNames='fade' // Note that this is 'classNames' and not 'className'
              >
                <TransitionHome property={property} />
              </CSSTransition>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ReactTransitionGroup;
