import React from 'react';
import { Col } from 'react-bootstrap';

const MovieSearchBox = (props) => {
  return (
    <div>
      <Col sm={4}>
        <input
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder='Type to search...'
        ></input>
      </Col>
    </div>
  );
};

export default MovieSearchBox;
