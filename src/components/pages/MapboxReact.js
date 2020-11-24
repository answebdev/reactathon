import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as parkData from '../data/skateboard-parks.json';
import '../styles/Mapbox.css';

const MapboxReact = () => {
  const TOKEN =
    'pk.eyJ1IjoiYW5zd2ViZGV2IiwiYSI6ImNraG54eXduNzBicXQycW1pdWh0MjI3cW8ifQ.j2dXhA2inqmrC9MotbCn-A';

  const [viewport, setViewport] = useState({
    latitude: 45.421106,
    longitude: -75.690308,
    width: '87vw',
    height: '87vh',
    zoom: 10,
  });

  // State to use for popup.
  // Set 'useState' to 'null' because the user hasn't chosen any park to see the info yet.
  const [selectedPark, setSelectedPark] = useState(null);

  // Set 'useEffect' so that we can close popup with Escape key.
  // We use an empty array ([]) because we only want this to happen once.
  // And we only want this to happen once because we want to add a keydown listener on the window,
  // so we only need to attach that event listener one time.
  useEffect(() => {
    const listener = (e) => {
      // If we hit the Escape key, set the selected park back to null, which will cause the popup to disappear.
      if (e.key === 'Escape') {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);

    // Say this 'MapboxReact.js' file disappears and stops being rendered by React.
    // And we want to clean up this event listener. We no longer care about listening for the Escape key,
    // so we want to basically remove that event listener.
    // We can use the effect cleanup function to do that.
    // So, we return a function, which will be called on the cleanup of this effect (which in this case, is
    // when the app component is unmounted):
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          <strong>Mapbox React</strong>
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=JJatzkPcmoI'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/leighhalliday/mapbox-react-demo'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
            <p>
              Note: Need to figure out how to get Mapbox access token working
              while in <strong>.env.local</strong> (Mapbox access token is
              currently defined as a variable and used in main file).
            </p>
          </p>
          <p style={styles}>
            Resources:
            <ul>
              <li>
                REACT-MAP-GL &nbsp;| &nbsp;
                <a
                  href='https://visgl.github.io/react-map-gl/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                REACT-MAP-GL (NPM) &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/react-map-gl'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                GPS Coordinates &nbsp;| &nbsp;
                <a
                  href='https://www.gps-coordinates.net/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Mapbox Account Sign-in &nbsp;| &nbsp;
                <a
                  href='https://account.mapbox.com/auth/signin/?route-to=%22https://account.mapbox.com/%22'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Mapbox Styles &nbsp;| &nbsp;
                <a
                  href='https://www.mapbox.com/gallery/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Use Mapbox GL JS in a React App &nbsp;| &nbsp;
                <a
                  href='https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Open Ottawa (Data Used) &nbsp;| &nbsp;
                <a
                  href='https://open.ottawa.ca/'
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
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/answebdev/ckhp3rta60d2l19piwffs1aj5'
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            {parkData.features.map((park) => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                {/* Click event for popup info: */}
                <button
                  className='marker-btn'
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src='/skateboarding.svg' alt='Skate Park Icon' />
                </button>
              </Marker>
            ))}

            {/* If there is a selected park, show a popup (need to import Popup above - line 3): */}
            {selectedPark ? (
              <Popup
                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]}
                onClose={() => {
                  setSelectedPark(null);
                }}
              >
                <div>
                  <h2>{selectedPark.properties.NAME}</h2>
                  <p>{selectedPark.properties.DESCRIPTIO}</p>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      </div>
    </Container>
  );
};

export default MapboxReact;
