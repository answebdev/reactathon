import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import axios from 'axios';

// Source: https://www.florin-pop.com/blog/2019/02/react-movie-search-app/
// OMDb API: http://www.omdbapi.com/

class SearchForm extends Component {
  state = {
    movieData: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${`662c1a4a`}&s=${
          this.state.searchTerm
        }&plot=full`
      )
      .then((res) => res.data)
      .then((res) => {
        this.setState({ movieData: res });
        console.log(res);
      });
  }

  getIt() {
    return () => {
      axios.get('http://localhost:3000');
    };
  }
  // window.location = '/search-results' redirects to a page with the path '/search-results' after submitting.
  // Need to create a new file and add it to App.js like this:  <Route exact path='/search-results' component={SearchResults} />
  // Source: https://medium.com/@gazzaazhari/simple-form-submission-fetching-on-react-js-using-axios-8e106d3248eb

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const user = {
  //     name: this.state.name,
  //   };
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/users', { user })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       window.location = '/retrieve'; //This line of code will redirect you once the submission is succeed
  //     });
  // };

  render() {
    return (
      <div>
        <Helmet>
          <title>Reactathon | Movie Search</title>
        </Helmet>
        <Container>
          <div>
            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              <strong>Movie Search</strong>
            </h3>
            <hr />

            <p>Search Form</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default SearchForm;
