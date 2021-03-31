import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import classes from '../styles/Countries.module.css';
import Spinner from '../misc/Spinner';
import axios from 'axios';

// API: https://restcountries.eu/

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Helmet>
        <title>Reactathon | Countries</title>
      </Helmet>
      <Container>
        <div>
          <div>
            <hr />

            {/* Search Filter */}
            <h4 className={classes.Header}>Search for a Country</h4>
            <input
              className={classes.Input}
              type='text'
              placeholder='Search Countries'
              onChange={(e) => setSearch(e.target.value)}
            />

            <br />

            {filteredCountries.map((country, idx) => (
              <CountryList key={idx} {...country} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const CountryList = (props) => {
  const { name, flag } = props;

  return (
    <>
      <Row>
        <Col>
          <Link to={`countries/${name.id}`}>
            <p>
              <img
                src={flag}
                alt={name}
                style={{ width: '15%', height: 'auto' }}
              />
              <p>{name}</p>
            </p>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Countries;
