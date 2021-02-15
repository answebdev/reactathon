import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  // waitForElement,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Clickers from './Clickers';

afterEach(cleanup);

// Basic Render Test
it('displays the count', () => {
  const { getByTestId } = render(<Clickers />);

  // Use '0' in 'toHaveTextContent' because our state in the Clickers component starts at '0'.
  // But to make sure it can actually fail first, use '1' when running the test to make sure it fails.
  expect(getByTestId('count')).toHaveTextContent(0);
});

// SYNC Code Test
// Test events that happen right way (synchronously): 'Up' button.
// Tests to make sure it updates the content to reflect the new state when click event is fired
// (testing to make sure the 'useState' hook works correctly).
it('increments count', () => {
  const { getByTestId, getByText } = render(<Clickers />);
  // Find the 'Up' button using 'getByText', then click it.
  fireEvent.click(getByText('Up'));
  // Use '1' in 'toHaveTextContent' because when we click the 'Up' button, it should increment to '1'.
  expect(getByTestId('count')).toHaveTextContent(1);
});

// ASYNC Code Test
// Test events that do no happen right away (asynchronously), e.g., Ajax calls
// Here, the 'decrease' function (see Clickers.js) - uses a 'seteTimeout' to mimic an Ajax call (async), or something like that: 'Down' button.
it('decrements count delayed', async () => {
  const { getByText } = render(<Clickers />);
  // Find the 'Down' button using 'getByText', then click it.
  fireEvent.click(getByText('Down'));

  // Use '-1' in 'toHaveTextContent' because when we click the 'Down' button, it should decrement to '-1'.
  // If we run just the following 'expect' line, the test will fail because when we click the button, it's delayed (because it's asnyc - because the of 'setTimeout'),
  // and so the count had not yet changed to '-1'.
  // So, we need to use a different bit of logic, anytime we need to WAIT for somthing to happen: 'waitForElement' (need to import 'waitForElement' - see above, line 2).
  // expect(getByTestId('count')).toHaveTextContent(-1);

  // So:
  // We have to WAIT for an element to have '-1'.
  // So, we first convert this to be 'asnyc', so that we can use 'await' (add 'async' to first line of test).
  // So, keep waiting until you find an element that has '-1' in it.

  // Note: 'waitForElement' is deprecated; use 'waitFor' (be sure to also import 'waitFor' up above)
  // const countSpan = await waitForElement(() => getByText('-1'));
  const countSpan = await waitFor(() => getByText('-1'));
  expect(countSpan).toHaveTextContent('-1');
});
