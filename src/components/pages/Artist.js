import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
// import Spinner from '../misc/Spinner';
// import classes from '../styles/MusicAlbumsDynamicRouting.module.css';
import axios from 'axios';

// See: https://www.youtube.com/watch?v=Law7wfdg_ls
// See: https://onecompiler.com/questions/3w48395w3/typeerror-data-map-is-not-a-function-in-react-js

const Artist = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchArtist();
  }, []);

  const fetchArtist = () => {
    axios
      .get(
        `https://personal-music-api.herokuapp.com/albums/?id=${match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  //   const [artist, setArtist] = useState({});

  //   // Add 'img' as empty object if 'img' (or other property) is undefined ('null') in the object in the API to prevent an error:
  //   //   const [artist, setArtist] = useState({
  //   //     img: {},
  //   //   });

  //   //   const [isLoading, setIsLoading] = useState(false);
  //   //   const [error, setError] = useState(false);
  //   //   const apiURL = 'https://personal-music-api.herokuapp.com/albums';

  //   // Source: https://www.youtube.com/watch?v=Law7wfdg_ls
  //   // See 16:45 mark for creating dynamic routes using data fetched from an API (specifically at the 22:00 mark)

  //   useEffect(() => {
  //     fetchArtist();
  //     // console.log(match);
  //   }, []);

  //   const fetchArtist = async () => {
  //     const fetchArtist = await fetch(
  //       `https://personal-music-api.herokuapp.com/albums/?id=${match.params.id}`
  //     );

  //     const artist = await fetchArtist.json();
  //     setArtist(artist);
  //     // setArtist(JSON.stringify(artist));
  //     // console.log(`artist info: ${artist}`);
  //     // console.log(artist);

  //     // const xId = match.params.id;
  //     // let theId = match.params.id;
  //     console.log(artist);
  //     console.log(match.params.id);

  //     console.log(`Artist: ${artist[0].artist}`);
  //     console.log(`Album: ${artist[0].album}`);
  //   };

  //   const fetchArtist = () => {
  //     setIsLoading(true);
  //     setError(null);

  //     fetch(
  //       `https://personal-music-api.herokuapp.com/albums/?id=${match.params.id}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setIsLoading(false);
  //         setArtist(data);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //         setError(error);
  //         setIsLoading(false);
  //       });
  //   };

  const artist = {
    display: 'grid',
    gridTemplateColumns: '50% auto',
    gridGap: '1rem',
    padding: '4em 1em',
  };

  const info = {
    marginTop: '45px',
  };

  return (
    <div>
      {data.map((item) => (
        <Helmet>
          <title>
            Reactathon | {item.artist} | {item.album}
          </title>
        </Helmet>
      ))}

      <Container>
        <div style={artist}>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <h3
                  style={{
                    marginBottom: '20px',
                    fontWeight: '700',
                  }}
                >
                  {item.artist}
                </h3>
                <img
                  style={{ height: '500px', width: 'auto' }}
                  src={item.img}
                  alt={item.album}
                  title={item.album}
                />

                <p style={{ marginTop: '20px' }}>
                  <a
                    href={item.website}
                    rel='noopener noreferrer'
                    target='_blank'
                    variant='dark'
                  >
                    Website
                  </a>
                </p>
              </div>
            );
          })}
          {data.map((item) => (
            <div style={info}>
              <p style={{ fontSize: '24px', fontFamily: 'Quicksand' }}>
                {item.album} ({item.year})
              </p>

              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  fontFamily: 'Quicksand',
                }}
              >
                Track Listing
              </p>

              {item.tracks.map((track, index) => (
                <div key={index}>
                  <p style={{ fontFamily: 'Quicksand' }}>{track}</p>
                </div>
              ))}
            </div>
          ))}

          <div style={{ marginBottom: '20px' }}>
            <a
              style={{ backgroundColor: '#2c2c2c' }}
              href='/music-albums-dynamic-routing'
              class='btn btn-dark'
              role='button'
              aria-pressed='true'
            >
              <i class='fas fa-arrow-left' onclick='history.back()'></i> BACK TO
              ARTISTS
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Artist;
