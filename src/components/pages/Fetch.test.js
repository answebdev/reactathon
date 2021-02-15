import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axiosMock from 'axios';
//import axiosMock from '../../__mocks__/axios';
import Fetch from './Fetch';

// See also: https://medium.com/better-programming/testing-react-list-using-axios-and-react-testing-library-d000eebf3413
// Test React Apps With React Testing Library: https://nainacodes.com/blog/test-react-apps-with-react-testing-library

afterEach(cleanup);

it('fetches and displays data', async () => {
  // Test to see if the Ajax call is performed correctly,
  // so that when we have some data, it gets rendered inside of our span (see Fetch.js).
  // Mocking an Axios request.
  // The way to mock in Jest:
  // First, create a folder inside the 'src' folder called '__mocks__'.
  // If we ever want to mock out a module, we can put it inside this folder and give it the same name...
  // in our case, we'll call it 'axios.js' (see 'axios.js' in '__mocks__' folder).

  // Override the global 'mockResolvedValue' (from 'axios.js'), and give it a custom one explicitly for this test.
  // The next time it's called, return the value one time ('Once').
  axiosMock.get.mockResolvedValueOnce({ data: { greeting: 'hello there' } });

  const url = '/greeting';
  const { getByTestId } = render(<Fetch url={url} />);

  expect(getByTestId('loading')).toHaveTextContent('Loading data...');

  // We have an issue, because this is asynchronous (i.e., the Get request),
  // so we need to wait for the element (the 'resolvedSpan') with the data to appear on the screen.
  // This is why we need 'waitForElement' (Which we imported above).
  // So, we pass in an arrow function that needs to return the element: 'getByTestId('resolved')'.
  // And it this returns a promise, so we want to AWAIT for this to resolve.

  // Note: 'waitForElement' is deprecated; use 'waitFor' (be sure to also import 'waitFor' up above)
  // const resolvedSpan = await waitForElement(() => getByTestId('resolved'));
  const resolvedSpan = await waitFor(() => getByTestId('resolved'));

  // Because we mocked it out above ('hello there'), we can just use that here: 'hello there'.
  expect(resolvedSpan).toHaveTextContent('hello there');

  // A couple more tests to make sure that the mock was called correctly.
  // Here, we expect it to have been called one time.
  expect(axiosMock.get).toHaveBeenCalledTimes(1);

  // Expect it to have been called with the argument 'url' (which we popped into a variable up above --> const url = '/greeting').
  // Test to make sure that it receives the URL that we expected it to receive.
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
