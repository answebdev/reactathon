import React from 'react';
import classes from '../styles/SearchFilter.module.css';

const CountryDetail = (props) => {
  const { name, nativeName, capital, region, flag } = props;

  return (
    <>
      <div className={classes.MainDiv}>
        <ul>
          <img className={classes.Flag} src={flag} alt={name} />
        </ul>
        <li className={classes.Child}>
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            <strong>Native Name: </strong>
            {nativeName}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
        </li>
      </div>
    </>
  );
};

export default CountryDetail;
