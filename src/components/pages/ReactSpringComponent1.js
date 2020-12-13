import React from 'react';
// import { Spring } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

export default function ReactSpringComponent1() {
  const c1Style = {
    background: 'steelblue',
    color: '#ffffff',
    padding: '1.5rem',
  };

  const counter = {
    background: '#333333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto',
  };

  return (
    // Put whatever we want to animate inside <Spring>
    // This will animate from opacity 0 to opacity 1;
    // it will also start at marginTop of -500 (above the window) to marginTop 0 (the natural position):
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1Style}>
            <h1>
              <strong>Component 1</strong>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            {/* From 0 - 10: this will show a counter go from 0 to 10.
            But, it goes very fast and shows decimal points.
            To fix this and slow it down, add in a 'config' with a duration of 10 seconds (10000 ms).
            To get rid of the decimals, add on the 'toFixed()' method down below to 'props.number'.
            And now it will show the counter that it takes 10 seconds to animate, and w/o the decimals. */}
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {(props) => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}
