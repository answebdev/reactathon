import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import axios from 'axios';

// Source: https://www.youtube.com/watch?v=x9UEDRbLhJE

// Post Request with Axios
class PostForm extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     userId: '',
  //     title: '',
  //     body: '',
  //   };
  // }

  state = {
    userId: '',
    title: '',
    body: '',
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    // The Post method takes in a second arguement, which is the data that has to be sent: this.state (which is all 3: userId, title, and body)
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <Helmet>
          <title>Reactathon | Post Form</title>
        </Helmet>
        <Container>
          <div>
            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              <strong>Post Form</strong>
            </h3>
            <hr />

            <p>Post Form</p>

            <form onSubmit={this.submitHandler}>
              <div>
                <input
                  type='text'
                  name='userId'
                  value={userId}
                  onChange={this.changeHandler}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='title'
                  value={title}
                  onChange={this.changeHandler}
                />
              </div>
              <div>
                <input
                  type='text'
                  name='body'
                  user={body}
                  onChange={this.changeHandler}
                />
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
export default PostForm;
