import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import { Container, Button } from 'react-bootstrap';
// import classes from '../styles/Artist.module.css';
import axios from 'axios';
import { uuid } from 'uuidv4';

const CountryDetail = ({ match }) => {
  const [data, setData] = useState([]);

  // const history = useHistory();

  useEffect(() => {
    fetchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCountry = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/all/?id=${match.params.id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // Create random ID:
  // let id = new Date().valueOf();
  // console.log(id);

  console.log(`UUID: ${uuid()}`);

  //   let lookup = {};
  //   for (var i = 0, len = data.length; i < len; i++) {
  //     lookup[data[i].id] = data[i];
  //   }
  //   console.log(JSON.stringify(lookup));

  return (
    <div>
      {data.map((item) => (
        <Helmet>
          <title key={uuid()}>Reactathon | Countries | {item.name}</title>
        </Helmet>
      ))}

      <div>
        {data.map((item, i) => {
          return (
            // <div key={uuid()}>
            <div key={i}>
              <div>
                <img
                  style={{ width: '15%', height: 'auto' }}
                  src={item.flag}
                  title={item.name}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryDetail;
