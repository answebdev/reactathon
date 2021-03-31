import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WeatherUi from './WeatherUi';
// import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import Spinner from '../misc/Spinner';
// import classes from '../styles/Weather.module.css';

// Source: https://www.youtube.com/watch?v=uZGhTYZ6eys
// Code: https://github.com/codebucks27/React-Weather-app

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const APIKEY = '016af1d0bf77f0007d077f39dc84b387';

  async function fetchWeather(e) {
    e.preventDefault();
    if (search.city === '') {
      console.log('Add values');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.city},${search.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
      console.log(data);
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'city') {
      setSearch({ ...search, city: value });
    }
    if (name === 'country') {
      setSearch({ ...search, country: value });
    }
  };

  // ALERNATIVE
  // const [weather, setWeather] = useState([]);
  // const [search, setSearch] = useState({
  //   city: '',
  //   country: '',
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;
  // const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${search.city},${search.country}&APPID=${APIKEY}`;

  // const fetchWeather = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError(null);

  //   fetch(apiURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIsLoading(false);
  //       setWeather({ data: data });
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       setError(error);
  //       setIsLoading(false);
  //     });
  // };

  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   if (name === 'city') {
  //     setSearch({ ...search, city: value });
  //   }
  //   if (name === 'country') {
  //     setSearch({ ...search, country: value });
  //   }
  // };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Weather</title>
      </Helmet>

      <div>
        <span>Weather</span>
        <br />
        <form>
          <input
            type='text'
            placeholder='City'
            name='city'
            onChange={(e) => handleChange(e)}
          />
          &nbsp; &nbsp; &nbsp;&nbsp;
          <input
            type='text'
            placeholder='Country'
            name='country'
            onChange={(e) => handleChange(e)}
          />
          <button onClick={(e) => fetchWeather(e)}>Submit</button>
        </form>

        {/* {!isLoading ? <div className='text-center'></div> : <Spinner />}
        {!isLoading && error ? (
          <div>
            <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
          </div>
        ) : null} */}

        {weather.data !== undefined ? (
          <div>
            <WeatherUi data={weather.data} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
