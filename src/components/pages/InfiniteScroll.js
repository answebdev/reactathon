import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ogimage from '../../img/reactathon-open-graph.png';
import MetaTags from 'react-meta-tags';
import '../styles/Infinite.css';

// Dummy data - array of 25 elements (counts up from 1 to 25) (although your data can come from somehwere, like a server):
const allData = new Array(25).fill(0).map((_val, i) => i + 1);
const perPage = 10;

// 'reducer' receives two arguments:
// 1. the current 'state';
// 2. an event that occurs - within this action is all the data you need to produce the new version of the state.
// We typically build a 'switch' statement that will switch on the different action types that can occur,
// and a number of 'case' statements in the 'switch' to handle all of the different types that we can see.
// Our two cases will be:
// 1. Start loading when the user clicks the loading button ('start');
// 2. Another event once the data has been loaded ('loaded') - where we DO have data to update into our state.
// 'default' is for what occurs if the reducer receives an action that we don't know how to handle.
const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'start':
      // Return the new state (that's the goal of a reducer, i.e. to take the old state and the new action, and generate the new state).
      // Use ... to take a copy of the state, and add on the new attributes that we want to change -
      // in this case, we want to change 'loading' to 'true'.
      return { ...state, loading: true };
    case 'loaded':
      // When it's loaded, we want to take a copy of the state and then update all the different properties that we have changed:
      // change 'loading' to 'false';
      // then 'data' --> now it will contain the old data, plus the new data);
      // is there any new data to load? ('more') --> so, if there's 10 and 10, let's assume there's more data to fetch.
      // Update the 'after' variable - take the previous 'after' variable (state.after, which is 0 at the beginning), and tell it to start at 10 after it loads the first time.
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === perPage,
        after: state.after + action.newData.length,
      };
    default:
      throw new Error("Don't understand action");
  }
};

const InfiniteScroll = () => {
  const styles = {
    fontSize: '16px',
  };

  // 4 Things we need to keep track of. It's the perfect case to use 'useReducer',
  // rather than keeping track of this state individually (because when the user clicks the button,
  // someimes we're going to have to update 3 or 4 of these items at the same time,
  // so instead of calling different 'setState' functions, we can just, instead, disaptch an event that we're loading data;
  // and the reducer that we build here will keep track of managing all of these different state properties):

  // 1. Loading
  // 2. Is there 'more' data to load? (after the 25 elements, for example)
  // 3. Where we're at in terms of loading data, i.e. after the first 10, then load the next ten (10-20), etc.
  // 4. Data (in state)

  // Load the data into state (in our case, it's just dummy data).
  // Slice the data - grab the elements from 0 to 10 ('perPage').
  // i.e. grab the first 10 elements from the array and put it in some state --> [data].
  // Then map that out down below in the <li>.

  // const [data] = React.useState(allData.slice(0, perPage));

  // Reducer
  // The 'useReducer' hook takes two arguemnts:
  // 1. the reducer itself - this is a function that gets called every time an event is dispatched,
  // and it has a goal of taking the old state, along with the event that occurred, and create a new version of the state;
  // 2. the initial state that we want to have

  // This function returns the current 'state' (our data) and a function that you can call, called 'dispatch'.
  // 'disaptch' allows you to dispatch an event to the reducer so that it produces a new version of the state.
  // See 'reducer' function created above --> 'const reducer = '...

  // Using 'useReducer' to keep track of nested state, where we're updating four properties (so there's no longer a need to use Redux).
  // And these properties are updated all at the same time, in a lot of cases.
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false, // start with 'false'
    more: true, // 'true' because we assume there's more to load
    data: [],
    after: 0, // the furthest we've gotten in terms of loading data so far (typically, this is the last ID from the data we've loaded, i.e. "get me the next 10 after this ID")
  });

  const { loading, data, after, more } = state;

  console.log(state);

  return (
    <div>
      <Helmet>
        <title>Reactathon | Infinite Scroll</title>
      </Helmet>

      <MetaTags>
        <meta
          property='og:image'
          content='%PUBLIC_URL%/reactathon-open-graph.png'
        />
        <meta property='og:image:type' content={ogimage} />
        <meta property='og:image:width' content='1024' />
        <meta property='og:image:height' content='1024' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content='https://react-a-thon.netlify.app/infinite-scroll'
        />
        <meta property='og:title' content='Reactathon | Infinite Scroll' />
        <meta property='og:description' content='Projects made with React.' />

        <meta
          name='description'
          content='Reactathon is dedicated to projects made with React.'
        />
      </MetaTags>

      <Container>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Infinite Scroll</strong>
          </h3>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=cKzrgB6MqqM'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              . See the code&nbsp;
              <a
                href='https://github.com/leighhalliday/demo-infinite-scroll/blob/master/src/WithReducer.js'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .
            </p>
            <hr />
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                {data.map((row) => (
                  <Card
                    key={row}
                    style={{ width: '38rem', marginBottom: '20px' }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <strong>
                          Governors Call On Gretchen Whitmer To Shut Down Their
                          States So Residents Won't Get Mad At Them
                        </strong>
                      </Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        The Onion
                      </Card.Subtitle>
                      <Card.Text>
                        LANSING, MI—In an effort to take decisive action against
                        the rapid spread of the coronavirus, governors across
                        the country called on Michigan governor Gretchen Whitmer
                        this week to shut down their states this week so their
                        residents won’t get mad at them.
                      </Card.Text>
                      <Card.Link
                        href='https://politics.theonion.com/governors-call-on-gretchen-whitmer-to-shut-down-their-s-1845691592'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        Read Article
                      </Card.Link>
                    </Card.Body>
                  </Card>
                ))}

                <ul>
                  {/* {data.map((row) => (
              <li
                className='infinite-li'
                key={row}
                style={{ background: 'orange' }}
              >
                {row}
              </li>
            ))} */}

                  {/* If 'loading' is 'true', return this <li>: */}
                  {loading && <li>Loading...</li>}

                  {/* Hide this <li> when things are loading, so
                When not loading ('!loading') is 'true'.
                So we want to show the Load More button when it's not loading AND (&&) there's more to load: */}
                  {!loading && more && (
                    // <li className='infinite-li' style={{ background: 'green' }}>
                    <li>
                      {/* When the user clicks the button, it will dispatch the 'start' event (see above in 'reducer' function). */}
                      <Button
                        className='infinite-btn'
                        variant='dark'
                        size='lg'
                        block
                        // className='infinite-btn'
                        onClick={() => {
                          dispatch({ type: 'start' });

                          // Use 'setTimeout' to fake asynchronous.
                          setTimeout(() => {
                            // Grab the new data:
                            // Slice off the new data that we want to append to the data array -
                            // Slice from where we got to last time (use the 'after' variable because as we load data, this changes),
                            // and then however many we want to load (our per page is 10, i.e. 'perPage').
                            const newData = allData.slice(
                              after,
                              after + perPage
                            );

                            // Our reducer will receive 'loaded' and the new data that we grabbed:
                            dispatch({ type: 'loaded', newData });
                          }, 1000);
                        }}
                      >
                        <span id='load-more'>Load More Articles</span>
                      </Button>
                    </li>
                  )}
                </ul>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfiniteScroll;
