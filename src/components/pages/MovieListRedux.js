import React from 'react';
import classes from '../styles/Movies.module.css';

const MovieListRedux = (props) => {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <div className={classes.Box}>
      {props.movies.map((movie, index) => (
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

export default MovieListRedux;
