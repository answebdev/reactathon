import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row } from 'react-bootstrap';
import classes from '../styles/Movies.module.css';
import MovieListRedux from './MovieListRedux';
import MovieListHeadingRedux from './MovieListHeadingRedux';
import MovieSearchBoxRedux from './MovieSearchBoxRedux';
import MovieAddFavoritesRedux from './MovieAddFavoritesRedux';
import MovieRemoveFavoritesRedux from './MovieRemoveFavoritesRedux';

const MoviesRedux = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const APIKEY = process.env.REACT_APP_MOVIE_API_KEY;

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${APIKEY}`;

    const response = await fetch(url);
    // Convert to JSON
    const responseJson = await response.json();
    // console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-favorites')
    );

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  // Save to Local Storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];

    // This will update the state with our new array of films (see previous line), including the favorite movie that the user clicks => [...favorites, movie]
    setFavorites(newFavoriteList);

    // Save favorite movie to local storage.
    saveToLocalStorage(newFavoriteList);
  };

  // Function that removes favorites from the array in state.
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Movies (Redux)</title>
        <style type='text/css'>{`
        body {
          background-color: steelblue;
          color: #ffffff;
        }
    `}</style>
      </Helmet>
      <Container className={classes.MovieApp}>
        <Row className={classes.Child}>
          <MovieListHeadingRedux heading='Redux Movies' />
          <MovieSearchBoxRedux
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Row>
        <Row>
          <MovieListRedux
            movies={movies}
            handleFavorites={addFavoriteMovie}
            favoriteComponent={MovieAddFavoritesRedux}
          />
        </Row>
        <Row className={classes.Child}>
          <MovieListHeadingRedux heading='Redux Favorites' />
        </Row>
        <Row>
          <MovieListRedux
            movies={favorites}
            handleFavorites={removeFavoriteMovie}
            favoriteComponent={MovieRemoveFavoritesRedux}
          />
        </Row>
      </Container>
    </div>
  );
};

export default MoviesRedux;
