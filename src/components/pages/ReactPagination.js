import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
import '../styles/ReactPagination.css';

const ReactPagination = () => {
  // SET THE STATE
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Set to '1' - we want to begin on page 1
  const [currentPage, setCurrentPage] = useState(1);

  // set to '10' - 10 posts per page
  const [postsPerPage] = useState(10);

  // Make our request.

  // You SHOULD NOT put 'async' into 'useEffect', so we're going to create a new function: 'fetchPosts'.
  // Inside it, set loading to 'true' since we're in the process of fetching here.
  // And then we'll make our request, put it into a response variable (res).
  // And the URL we use is from the JSON Placeholder website - click on posts to see the posts in JSON form, then grab this URL.
  // Then we set the posts to the response data: 'res.data'.
  // And then set loading back to false.
  // Finally, since this is a function we just created, we need to call it: 'fetchPosts()'.

  // 'useEffect' runs whenever the component mounts, but it also runs whenver it updates.
  // And when our function runs, it's going to update the components.
  // So what will happen is it will be a neverending loop.
  // So to stop that, we simply pass in an empty set of brackets ([]) - see below right after function call.
  // Leaving it empty mimics the componentDidMount life cycle method, so it will only run when it mounts, which is what we want.
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // console.log(posts);

  // We're going to have a separate 'posts' component that we're going to pass them into (in 'Posts.js').
  // And then within that component, we're going to loop through them (see Posts.js).
  // Then we're going to bring in the <Posts /> component down below, along with its props.

  // Get current posts.
  // Get the index of the last post:
  const indexOfLastPost = currentPage * postsPerPage;

  // Get the index of the first post:
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Get the current post - set it to the state, which is ALL the posts,
  // but we want to slice and pass in the index of the first post, and the index of the last post.
  // This will slice out the number of posts that we want, which should be 10 (which we set above in the state as posts per page).
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // PAGINATION
  // We're going to create a separate component for the pagination (we could put everyting in this same pile, but then it gets too messy):
  // see 'Pagination.js' file.
  // Then, bring this <Pagination /> component in down below

  // Change page when clicking on pagination number.
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const styles = {
    fontSize: '16px',
  };

  return (
    <Container>
      <div className='App'>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
          <strong>React Pagination</strong>
        </h3>
        <div>
          <p style={styles}>
            View the video&nbsp;
            <a
              href='https://www.youtube.com/watch?v=IYCa1F-OWmk'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            . See the code&nbsp;
            <a
              href='https://github.com/bradtraversy/simple_react_pagination'
              rel='noopener noreferrer'
              target='_blank'
            >
              here
            </a>
            .
          </p>
          <p style={styles}>
            Resources:
            <ul>
              <li>
                JSON Placeholder &nbsp;| &nbsp;
                <a
                  href='http://jsonplaceholder.typicode.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
              <li>
                Axios &nbsp;| &nbsp;
                <a
                  href='https://www.npmjs.com/package/axios'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  View
                </a>
              </li>
            </ul>
          </p>
          <hr />
        </div>
        <h1 className='text-primary mb-3'>My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </Container>
  );
};

export default ReactPagination;
