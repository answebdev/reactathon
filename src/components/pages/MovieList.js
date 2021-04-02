import React from 'react';
import classes from '../styles/Movies.module.css';

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <div className={classes.Fragment}>
      {props.movies.map((movie) => (
        <div className={classes.ImageContainer}>
          <img src={movie.Poster} alt='movie'></img>
          <div
            onClick={() => props.handleFavorites(movie)}
            className={classes.Overlay}
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
