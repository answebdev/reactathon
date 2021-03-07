import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import CountryDetail from './SearchFilterDetail';
import classes from '../styles/SearchFilter.module.css';
import Spinner from '../misc/Spinner';
import axios from 'axios';

const SearchFilter = () => {
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

  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Search Filter</title>
      </Helmet>
      <Container>
        <div style={{ marginBottom: '40px' }} className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Search Filter</strong>
          </h3>
          <p>Search filter using React hooks.</p>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=Q8JyF3wpsHc'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .<br /> See the code&nbsp;
              <a
                href='https://codesandbox.io/s/react-hooks-search-filter-4gnwc?file=/src/index.js'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .<br />
              See the API&nbsp;
              <a
                href='https://restcountries.eu/rest/v2/all'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .
            </p>
            <hr />

            <h4 className={classes.Header}>Search for a country</h4>
            <input
              className={classes.Input}
              type='text'
              placeholder='Search Countries'
              onChange={(e) => setSearch(e.target.value)}
            />

            <br />

            {filteredCountries.map((country, idx) => (
              <CountryDetail key={idx} {...country} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

// const CountryDetail = (props) => {
//   const { name, flag } = props;

//   return (
//     <>
//       <p className={classes.MainDiv}>
//         <img src={flag} alt={name} style={{ width: '15%', height: 'auto' }} />
//       </p>
//       <p>{name}</p>
//     </>
//   );
// };

export default SearchFilter;
