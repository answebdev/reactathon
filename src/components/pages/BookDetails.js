import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import classes from '../styles/Artist.module.css';
import axios from 'axios';

// CORS Error: https://www.pluralsight.com/guides/allow-access-control-origin-in-create-react-app
// Also: https://www.telerik.com/blogs/dealing-with-cors-in-create-react-app
// Also: https://www.youtube.com/watch?v=hxyp_LkKDdk

const BookDetails = ({ match }) => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_BOOKS_API_KEY;

  const history = useHistory();

  useEffect(() => {
    fetchBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBook = () => {
    axios
      // .get(
      //   `https://cors-anywhere.herokuapp.com/https://books.google.com/books?id=${match.params.id}`
      // )
      .get(`https://books.google.com/books?id=${match.params.id}`)
      // .get(`https://api.allorigins.win/raw?url=https://books.google.com/books?id=${match.params.id}`)
      // .get(`https://books.google.com/books?id=${match.params.id}&key=${apiKey}`)
      //   .get(`https://www.googleapis.com/books/v1/volumes?q=${match.params.id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* {data.map((item) => (
        <Helmet>
          <title key={item.id}>
            Book Search | {item.artist}: {item.album}
          </title>
        </Helmet>
      ))} */}

      <div>
        {data.map((item) => {
          return (
            <div>
              <div key={item.id}>
                <h3>{item.book.title}</h3>
              </div>

              <div style={{ marginTop: '40px', marginBottom: '40px' }}>
                <Link
                  to='/book-search'
                  variant='dark'
                  role='button'
                  aria-pressed='true'
                >
                  <i
                    className='fas fa-arrow-left'
                    onClick={() => history.goBack()}
                  ></i>
                  &nbsp;BACK TO BOOK SEARCH
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookDetails;
