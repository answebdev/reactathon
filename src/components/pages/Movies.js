import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row } from 'react-bootstrap';
import classes from '../styles/Movies.module.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import MovieSearchBox from './MovieSearchBox';
import MovieAddFavorites from './MovieAddFavorites';
import MovieRemoveFavorites from './MovieRemoveFavorites';

// Source: https://www.florin-pop.com/blog/2019/02/react-movie-search-app/
// OMDb API: http://www.omdbapi.com/

// Used in this app:
// Source: https://www.youtube.com/watch?v=LGcgChoD_qY
// React Movie App Tutorial: https://www.youtube.com/watch?v=jc9_Bqzy2YQ
// Code: https://github.com/chrisblakely01/react-movie-app

// Similar: https://www.youtube.com/watch?v=1eO_hNYzaSc

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=31264601
// Key: 31264601

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    // const url = `http://www.omdbapi.com/?s=avengers&apikey=31264601`;
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=31264601`;

    const response = await fetch(url);
    // Convert to JSON
    const responseJson = await response.json();
    // console.log(responseJson);

    // 'Search' is the name of the entire array response (from OMDb) when you look in the console.

    // Without this if-check, we get a 'props.movies is undefined' error.
    // That's because up above, 'searchValue' is set to an empty string initially, when the app loads.
    // This empy value then gets passed to the request.
    // And then the request does NOT give us back a search array, because since it's initially an empty string, we did not ask for anything (it's an empty value!).
    // So that's why we get this error.
    // That's why we need this if statement to check.
    // So that we only set the movies if we get any search values back.

    // So: If the response has anything in it, then set movies (setMovies to 'responseJson.Search).
    // So if there are any search results, put them in state.
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // 'useEffect' => 'getMovieRequest' function gets called when the page loads only.
  // 'useEffect' hooks always get called on first render.
  useEffect(() => {
    getMovieRequest(searchValue);

    // Every time the 'searchValue' changes, we want to call the 'getMovieRequest' function and get our request.
    // Any value that goes in these square brackets causes the 'useEffect' hook to run.
  }, [searchValue]);

  // Save Local Storage
  const saveToLocalStorage = (items) => {
    // We need to set a 'key'. A key is what we use to retrieve and receive items from local storage.
    // Here, the key is called 'react-movie-app-favorites'.

    // The second argument is whatever we want to save: 'items'
    // It's best to save strings into local storage, so we need to do 'JSON.stringify' and pass in our 'items'.
    // This is going to save whatever items we pass in to local storage.
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  // Retreive items from Local Storage whenever the app loads.
  // We need this functionality too. If we only have 'saveToLocalStorage',
  // we will still not be able to see our saved movies when we refresh the page.
  // We also need to retrieve the movies from local storage whenver the app is refreshed and renders again.
  // So we need this functionality as well.

  // A good thing to use is the 'useEffect' hook, since the 'useEffect' hook always runs when the app loads for the first time.
  useEffect(() => {
    // When we save it to local storage, it is saved as a string (see above - we used JSON.stringify), so we need to convert it to an object when we retrieve it using JSON.parse.
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    );

    setFavorites(movieFavorites);

    // We only want this retrieval to happen when the page loads (when the app first runs),
    // so we pass in an empty array.
  }, []);

  const addFavoriteMovie = (movie) => {
    // Make a copy of the current state array using the spread operator => '...favorites' ('favorites' is our current state variable).
    // Then, pass in the 'movie'.
    // This creates a copy of the current 'favorites' array and add our new 'movie' to it.
    const newFavoriteList = [...favorites, movie];

    // This will update the state with our new array of films (see previous line), including the favorite movie that the user clicks => [...favorites, movie]
    setFavorites(newFavoriteList);

    // Save favorite movie to local storage.
    saveToLocalStorage(newFavoriteList);
  };

  // Function that removes favorites from the array in state.
  const removeFavoriteMovie = (movie) => {
    // The imdbID comes from the API.
    // Filter the movie out from the current favorite list.
    // Whenever we use 'filter' on an array, it gives us back a new array,
    // and then we just set this new array into state.
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);

    // This save the 'newFavoriteList' and keeps it updated, so that whenever you delete a movie and refresh the page,
    // this change will be reflected and it will no longer show and be in local storage.
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Movies</title>
        <style type='text/css'>{`
        body {
          background-color: #141414;
          color: #ffffff;
        }
    `}</style>
      </Helmet>
      <Container className={classes.MovieApp}>
        <Row className={classes.Child}>
          <MovieListHeading heading='Movies' />
          <MovieSearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Row>
        <Row>
          <MovieList
            movies={movies}
            handleFavorites={addFavoriteMovie}
            favoriteComponent={MovieAddFavorites}
          />
        </Row>
        <Row className={classes.Child}>
          <MovieListHeading heading='Favorites' />
        </Row>
        <Row>
          <MovieList
            movies={favorites}
            handleFavorites={removeFavoriteMovie}
            favoriteComponent={MovieRemoveFavorites}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
