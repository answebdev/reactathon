import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Swal from 'sweetalert2';

export class ReactSpringComponent2 extends Component {
  handleInfo() {
    Swal.fire({
      title: '<strong>REACT SPRING</strong>',
      icon: 'success',
      html: `Video |
       <a
         href='https://www.youtube.com/watch?v=S8yn3-WpVV8'
         rel='noopener noreferrer'
         target='_blank'
       >View
       </a>
       <br />
       Code |
              <a
                href='https://codesandbox.io/s/q8vmryvzjw'
                rel='noopener noreferrer'
                target='_blank'
              >
             View
              </a>
              <br />
              React-Spring |
                  <a
                    href='https://www.react-spring.io/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>`,
      showCloseButton: true,
      //   showCancelButton: true,
      focusConfirm: false,
      //   confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      //   confirmButtonAriaLabel: 'Thumbs up, great!',
      //   cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      //   cancelButtonAriaLabel: 'Thumbs down',
    });
  }
  render() {
    const c2Style = {
      background: 'slateblue',
      color: '#ffffff',
      padding: '1.5rem',
    };

    const btn = {
      background: '#333333',
      color: '#ffffff',
      padding: '1rem 2rem',
      border: 'none',
      textTransform: 'uppercase',
      margin: '15px 0',
      marginRight: '10px',
    };

    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }} // 1 second delay and duration for animation
      >
        {(props) => (
          <div style={props}>
            <div style={c2Style}>
              <h1>
                <strong>Component 2</strong>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              {/* Remember that the state for the 'onClick' is above us in 'ReactSpring.js',
              so we're just going to say 'this.props.toggle' here in the 'onClick',
              and then we'll catch that up above in 'ReactSpring.js'.
              So when this button is clicked, it's going to call 'this.props.toggle'
              so in <ReactSpringComponent2> in 'ReactSpring.js', we need to add 'toggle',
              and set that to whatever we want to happen, which is a method we'll call toggle (see <ReactSpringComponent2> in 'ReactSpring.js'). */}
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
              <button style={btn} type='submit' onClick={this.handleInfo}>
                Page Info
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default ReactSpringComponent2;
