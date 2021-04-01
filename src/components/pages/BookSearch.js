import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import Spinner from '../misc/Spinner';
import classes from '../styles/BookSearch.module.css';
import axios from 'axios';

// Source: https://www.youtube.com/watch?v=LGcgChoD_qY

const BookSearch = () => {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const apiKey = process.env.REACT_APP_BOOKS_API_KEY;

  const handleChange = (e) => {
    const book = e.target.value;
    setBook(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(book);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>Reactathon | Book Search</title>
      </Helmet>

      <div className={classes.Form}>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.Input}
            type='text'
            onChange={(e) => handleChange(e)}
            placeholder='Search Books'
            autoComplete='off'
          />
          &nbsp;&nbsp;
          <button
            className={classes.SearchBtn}
            onChange={(e) => handleChange(e)}
            type='submit'
          >
            Search
          </button>
        </form>
      </div>

      <div className={classes.ResultsDiv}>
        {result.map((book) => (
          <div className={classes.Book}>
            <div className={classes.Image}>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={book.volumeInfo.previewLink}
              >
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  title={book.volumeInfo.title}
                />
              </a>
            </div>
            <p>
              <strong>Title:</strong> {book.volumeInfo.title}
            </p>
            {/* <p>Text Snippet: {book.searchInfo.textSnippet}</p> */}
            <p>
              <strong>Author(s):</strong> {book.volumeInfo.authors}
            </p>
            <p>
              <strong>Publisher:</strong> {book.volumeInfo.publisher}
            </p>
            <p>
              <strong>Date Published:</strong> {book.volumeInfo.publishedDate}
            </p>
            {/* <p>Description: {book.volumeInfo.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
