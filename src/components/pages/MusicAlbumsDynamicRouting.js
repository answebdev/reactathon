import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from '../misc/Spinner';
import classes from '../styles/MusicAlbumsDynamicRouting.module.css';

const MusicAlbumsDynamicRouting = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiURL = 'https://personal-music-api.herokuapp.com/albums';

  // Source: https://www.youtube.com/watch?v=Law7wfdg_ls
  // See 16:45 mark for creating dynamic routes using data fetched from an API (specifically at the 22:00 mark)

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = () => {
    setIsLoading(true);
    setError(null);

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setArtists(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  // const artistStyle = {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(3, 1fr)',
  //   gridGap: '1rem',
  //   textAlign: 'center',
  // };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Music Albums (with Dynamic Routing)</title>
      </Helmet>
      <Container>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Music Albums (with Dynamic Routing)</strong>
          </h3>

          <hr />

          <h3 className={classes.MainHeader}>Artists</h3>

          {/* If not isLoading, show a button to load the data, otherwise show a loading state */}
          {!isLoading ? (
            <div className='text-center'>
              {/* <Button
                className={classes.Button}
                variant='outline-dark'
                onClick={() => fetchMusic()}
              >
                Get Music
              </Button> */}
            </div>
          ) : (
            <Spinner />
          )}

          {/* if not isLoading and there is an error state, display the error */}
          {!isLoading && error ? (
            <div>
              <p style={{ textAlign: 'center' }}>
                Oh, no. something went wrong!
              </p>
            </div>
          ) : null}

          <p>
            <div>
              {/* <div style={artistStyle}> */}
              {artists.map((artist) => {
                return (
                  <Row key={artist.id}>
                    <Col>
                      {/* <Col md={12}> */}
                      {artists ? (
                        // For dynamic routing:
                        <Link to={`music-albums-dynamic-routing/${artist.id}`}>
                          <div>{artist.artist}</div>
                        </Link>
                      ) : // <Card className={classes.MainCards}>
                      //   <Card.Img variant='top' src={artist.img} />
                      //   <Card.Body>
                      //     <Card.Title>
                      //       <strong>
                      //         <span className={classes.Artist}>
                      //           {artist.artist}
                      //         </span>
                      //       </strong>
                      //     </Card.Title>
                      //     <Card.Text>
                      //       <span className={classes.LeadInfo}>
                      //         {' '}
                      //         <span className={classes.AlbumInfo}>
                      //           {' '}
                      //           {artist.album}, {artist.year}
                      //         </span>
                      //       </span>
                      //       <Accordion defaultActiveKey='0'>
                      //         <Card>
                      //           <Accordion.Toggle
                      //             className={classes.AccordionToggle}
                      //             style={{ textDecoration: 'none' }}
                      //             as={Button}
                      //             variant='link'
                      //             eventKey='1'
                      //           >
                      //             <span className={classes.TrackListing}>
                      //               Track Listing
                      //             </span>
                      //           </Accordion.Toggle>
                      //           <Accordion.Collapse eventKey='1'>
                      //             <Card.Body>
                      //               {artist.tracks.map((track, index) => (
                      //                 <div key={index}>
                      //                   <p className={classes.Tracks}>
                      //                     {track}
                      //                   </p>
                      //                 </div>
                      //               ))}
                      //             </Card.Body>
                      //           </Accordion.Collapse>
                      //         </Card>
                      //       </Accordion>
                      //     </Card.Text>
                      //     <Button
                      //       block
                      //       className={classes.WebsiteButton}
                      //       href={artist.website}
                      //       rel='noopener noreferrer'
                      //       target='_blank'
                      //       variant='dark'
                      //     >
                      //       Website
                      //     </Button>
                      //   </Card.Body>
                      // </Card>
                      null}

                      {/* if there's no data and it's not loading, show a message */}
                      {!artists && !isLoading ? <div>No data yet</div> : null}
                    </Col>
                  </Row>
                );
              })}
            </div>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default MusicAlbumsDynamicRouting;
