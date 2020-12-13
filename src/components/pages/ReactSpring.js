import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Transition, animated } from 'react-spring/renderprops';
import ReactSpringComponent1 from './ReactSpringComponent1';
import ReactSpringComponent2 from './ReactSpringComponent2';
import ReactSpringComponent3 from './ReactSpringComponent3';

class ReactSpring extends Component {
  // Create state for transitions.
  // We want to look at a piece of our component state (to toggle Component3), and transition based on that.
  // We want to have an animation so that when we click a button,
  // we can fade it in (or you can have it slide in, or whatever animation you want).
  // We want this to effect on Component3, but we want to put the button in Component2 (see 'ReactSpringComponent2.js'),
  // so we need to have an event on that button in Component2 (see Component2 below) to pass up a prop
  // so that we can then create a method here to toggle it, and then implement the transition.
  state = {
    showComponent3: false,
  };

  // We want this toggle to change the state of 'showComponent3',
  // so we're going to do 'this.setState({ showComponent3: !this.state.showComponent3 })'.
  // And we want it to fade out, to transition, so that's where React Spring comes in.
  // So we need to import Transition (and animated) from React Spring so we can use it here.
  //   toggle = (e) => console.log(123);
  toggle = (e) => this.setState({ showComponent3: !this.state.showComponent3 });

  render() {
    return (
      <div>
        <Helmet>
          <title>Reactathon | React Spring</title>
        </Helmet>

        <div className='App'>
          <div style={{ marginBottom: '40px' }}>
            <ReactSpringComponent1 />
            <ReactSpringComponent2 toggle={this.toggle} />
            {/* <ReactSpringComponent3 /> */}
            {/* Instead of <ReactSpringComponent3 />, we want to put in a transition,
            and then <ReactSpringComponent3 /> is going to go inside all of this: */}
            <Transition
              native
              items={this.state.showComponent3}
              from={{ opacity: 0 }} // You can add any style properties that you want here (from, enter, leave).
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {(show) =>
                show &&
                ((props) => (
                  <animated.div style={props}>
                    <ReactSpringComponent3 />
                  </animated.div>
                ))
              }
            </Transition>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactSpring;
