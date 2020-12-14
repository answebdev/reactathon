import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import TransitionHome from './TransitionHome';
import data from '../data/data';
import Swal from 'sweetalert2';
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

  handleInfo() {
    Swal.fire({
      title: '<strong>REACT TRANSITION GROUP</strong>',
      icon: 'success',
      html: `Video |
       <a
         href='https://www.youtube.com/watch?v=BZRyIOrWfHU'
         rel='noopener noreferrer'
         target='_blank'
       >View
       </a>
       <br />
       Code |
              <a
                href='https://github.com/Ihatetomatoes/react-transition-group-classes'
                rel='noopener noreferrer'
                target='_blank'
              >
             View
              </a>
              <br />
              React Transition Group |
                  <a
                    href='https://reactcommunity.org/react-transition-group/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                  <br />React Transition Group (NPM) |
                  <a
                    href='https://www.npmjs.com/package/react-transition-group'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                  <br />React Transition Group (GitHub) |
                  <a
                    href='https://github.com/reactjs/react-transition-group'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>`,
      showCloseButton: true,
      focusConfirm: false,
    });
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

    const btn = {
      // background: '#333333',
      // color: '#ffffff',
      padding: '0.5rem 1rem',
      border: 'none',
      textTransform: 'uppercase',
      margin: '15px 0',
      marginRight: '10px',
      borderRadius: '4px',
    };

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
            <hr />

            <div style={{ marginBottom: '40px' }}>
              <div style={{ textAlign: 'center' }}>
                <button
                  style={btn}
                  onClick={() => this.nextProperty()}
                  disabled={property.index === data.properties.length - 1}
                >
                  Next
                </button>
                <button
                  style={btn}
                  onClick={() => this.prevProperty()}
                  disabled={property.index === 0}
                >
                  Prev
                </button>
                <button style={btn} type='submit' onClick={this.handleInfo}>
                  Page Info
                </button>
              </div>
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
