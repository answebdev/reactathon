import React from 'react';
import { Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const MovieSearchBoxRedux = (props) => {
  const movies = useSelector((state) => state.movies);
  const { id, title, genre } = movies[0];

  //const dispatch = useDispatch();

  console.log(movies);

  return (
    <div>
      <Col sm={4}>
        <input
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder='Type to search...'
        ></input>
        {/* <button
          onClick={() => dispatch({ type: 'GET_MOVIES' }, alert({ movies }))}
        >
          MOVIES
        </button> */}
        <p>
          {title} ({genre})
        </p>
      </Col>
    </div>
  );
};

export default MovieSearchBoxRedux;
