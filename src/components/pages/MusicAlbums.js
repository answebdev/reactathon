import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import Spinner from '../misc/Spinner';
import classes from '../styles/MusicAlbums.module.css';

// Making HTTP Post Requests (class-based components): https://www.youtube.com/watch?v=x9UEDRbLhJE
// How to use Axios with React: https://www.youtube.com/watch?v=oQnojIyTXb8&t=1s

const MusicAlbums = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiURL = 'https://personal-music-api.herokuapp.com/albums';

  // Source: https://nimblewebdeveloper.com/blog/custom-react-hooks-data-fetching

  function fetchMusic() {
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
  }

  const artistStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    textAlign: 'center',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Music Albums</title>
      </Helmet>
      <Container>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Music Albums</strong>
          </h3>

          <hr />

          <h3 className={classes.MainHeader}>Albums</h3>

          {/* If not isLoading, show a button to load the data, otherwise show a loading state */}
          {!isLoading ? (
            <div className='text-center'>
              <Button
                className={classes.Button}
                variant='outline-dark'
                onClick={() => fetchMusic()}
              >
                Get Music
              </Button>
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
            <div style={artistStyle}>
              {artists.map((artist) => {
                return (
                  <Row key={artist.id}>
                    <Col>
                      {/* <Col md={12}> */}
                      {artists ? (
                        <Card className={classes.MainCards}>
                          <Card.Img variant='top' src={artist.img} />
                          <Card.Body>
                            <Card.Title>
                              <strong>
                                <span className={classes.Artist}>
                                  {artist.artist}
                                </span>
                              </strong>
                            </Card.Title>
                            <Card.Text>
                              <span className={classes.LeadInfo}>
                                {' '}
                                <span className={classes.AlbumInfo}>
                                  {' '}
                                  {artist.album}, {artist.year}
                                </span>
                              </span>
                              <Accordion defaultActiveKey='0'>
                                <Card>
                                  <Accordion.Toggle
                                    className={classes.AccordionToggle}
                                    style={{ textDecoration: 'none' }}
                                    as={Button}
                                    variant='link'
                                    eventKey='1'
                                  >
                                    <span className={classes.TrackListing}>
                                      Track Listing
                                    </span>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey='1'>
                                    <Card.Body>
                                      {artist.tracks.map((track, index) => (
                                        <div key={index}>
                                          <p className={classes.Tracks}>
                                            {track}
                                          </p>
                                        </div>
                                      ))}
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              </Accordion>
                            </Card.Text>
                            <Button
                              block
                              className={classes.WebsiteButton}
                              href={artist.website}
                              rel='noopener noreferrer'
                              target='_blank'
                              variant='dark'
                            >
                              Website
                            </Button>
                          </Card.Body>
                        </Card>
                      ) : null}

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

export default MusicAlbums;

// ORIGINAL CARDS WITHOUT ACCORDION

// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import Spinner from '../misc/Spinner';
// import classes from '../styles/MusicAlbums.module.css';

// // Making HTTP Post Requests (class-based components): https://www.youtube.com/watch?v=x9UEDRbLhJE
// // How to use Axios with React: https://www.youtube.com/watch?v=oQnojIyTXb8&t=1s

// const MusicAlbums = () => {
//   const [artists, setArtists] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const apiURL = 'https://personal-music-api.herokuapp.com/albums';

//   // Source: https://nimblewebdeveloper.com/blog/custom-react-hooks-data-fetching

//   function fetchMusic() {
//     setIsLoading(true);
//     setError(null);

//     fetch(apiURL)
//       .then((res) => res.json())
//       .then((data) => {
//         setIsLoading(false);
//         setArtists(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setError(error);
//         setIsLoading(false);
//       });
//   }

//   const artistStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem',
//     textAlign: 'center',
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Reactathon | Music Albums</title>
//       </Helmet>
//       <Container>
//         <div className='App'>
//           <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
//             <strong>Music Albums</strong>
//           </h3>

//           <hr />

//           <h3 className={classes.MainHeader}>Albums</h3>

//           {/* If not isLoading, show a button to load the data, otherwise show a loading state */}
//           {!isLoading ? (
//             <div className='text-center'>
//               <Button
//                 className={classes.Button}
//                 variant='outline-dark'
//                 onClick={() => fetchMusic()}
//               >
//                 Get Music
//               </Button>
//             </div>
//           ) : (
//             <Spinner />
//           )}

//           {/* if not isLoading and there is an error state, display the error */}
//           {!isLoading && error ? (
//             <div>
//               <p style={{ textAlign: 'center' }}>
//                 Oh, no. something went wrong!
//               </p>
//             </div>
//           ) : null}

//           <p>
//             <div style={artistStyle}>
//               {artists.map((artist) => {
//                 return (
//                   <Row key={artist.id}>
//                     <Col>
//                       {/* <Col md={12}> */}
//                       {artists ? (
//                         <Card className={classes.MainCards}>
//                           <Card.Img variant='top' src={artist.img} />
//                           <Card.Body>
//                             <Card.Title>
//                               <strong>{artist.artist}</strong>
//                             </Card.Title>
//                             <Card.Text>
//                               <span className={classes.LeadInfo}>
//                                 {' '}
//                                 {artist.album}, {artist.year}
//                               </span>
//                               {artist.tracks.map((track, index) => (
//                                 <div key={index}>
//                                   <p className={classes.Tracks}>{track}</p>
//                                 </div>
//                               ))}
//                             </Card.Text>
//                             <Button
//                               href={artist.website}
//                               rel='noopener noreferrer'
//                               target='_blank'
//                               variant='dark'
//                             >
//                               Website
//                             </Button>
//                           </Card.Body>
//                         </Card>
//                       ) : null}

//                       {/* if there's no data and it's not loading, show a message */}
//                       {!artists && !isLoading ? <div>No data yet</div> : null}
//                     </Col>
//                   </Row>
//                 );
//               })}
//             </div>
//           </p>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default MusicAlbums;
