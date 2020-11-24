import React from 'react';
import { Container } from 'react-bootstrap';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import '../styles/GooglePlaces.css';

// NOTE:
// For this project, you need to add a script with your Google API Key to index.html (see index.html).
// This is going to be publicly available on your website. It's a requirement from Google.
// One thing you can do is go into your Google API console and limit it to the domain of the website you're pulling this to
// so that people can't copy this API and start using it on their own website.

const GooglePlaces = () => {
  const [address, setAddress] = React.useState('');

  // This function receieves as a parameter ('value') the address of the suggestion that the user has selected, i.e.
  // the 'value' of whatever the user selects.
  const handleSelect = async (value) => {};

  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          <strong>Google Places: Autocomplete in React</strong>
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=uJYqQdnw8LE'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/leighhalliday/demo-google-places-react'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
            <p>
              May need to set billing statement in Google Maps account to get
              API key to work.
            </p>
          </p>
          <p style={styles}>
            Resources:
            <ul>
              <li>
                React Places Autocomplete (NPM) &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/react-places-autocomplete'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Getting started with Google Maps Platform (To Get an API Key)
                &nbsp;| &nbsp;
                <a
                  href='https://developers.google.com/maps/gmp-get-started'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                How To Create Google Maps API KEY For Free &nbsp;| &nbsp;
                <a
                  href='https://www.youtube.com/watch?v=OGTG1l7yin4'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                How to Create Google Maps API KEY for Free &nbsp;| &nbsp;
                <a
                  href='https://www.youtube.com/watch?v=1JNwpp5L4vM'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Google Cloud Platform &nbsp;| &nbsp;
                <a
                  href='https://console.cloud.google.com/'
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

        <div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {/* This render prop function receives a bunch of props from (from React Places Autocomplete NPM docs): */}
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  id='address'
                  {...getInputProps({ placeholder: 'Type address' })}
                />

                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    return <div> {suggestion.description}</div>;
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    </Container>
  );
};

export default GooglePlaces;
