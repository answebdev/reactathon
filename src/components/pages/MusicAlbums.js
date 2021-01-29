import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Spinner from '../misc/Spinner';
import classes from '../styles/MusicAlbums.module.css';

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
              <Button variant='outline-dark' onClick={() => fetchMusic()}>
                Get Music
              </Button>
            </div>
          ) : (
            <Spinner />
          )}

          {/* if not isLoading and there is an error state, display the error */}
          {!isLoading && error ? (
            <div>
              <p>Oh no something went wrong!</p>
            </div>
          ) : null}

          <p>
            {artists.map((artist) => {
              return (
                <Row>
                  <Col>
                    {/* <Col md={12}> */}
                    {artists ? (
                      <Card className={classes.MainCards} key={artist.id}>
                        <Card.Img variant='top' src={artist.img} />
                        <Card.Body>
                          <Card.Title>{artist.artist}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant='dark'>Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    ) : null}

                    {/* if there's no data and it's not loading, show a message */}
                    {!artists && !isLoading ? <div>No data yet</div> : null}
                  </Col>
                </Row>
              );
            })}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default MusicAlbums;
