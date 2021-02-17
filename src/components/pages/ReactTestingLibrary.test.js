import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactTestingLibrary from './ReactTestingLibrary';

// See also: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
// See also: https://www.robinwieruch.de/react-testing-library

// Call the 'cleanup' function after each test to clean things up.
afterEach(cleanup);

// Basic Render Test
describe('React Testing Library Page', () => {
  test('renders react testing library component', () => {
    render(<ReactTestingLibrary />);
    screen.debug();
  });
});

// Snapshot Test
it('renders', () => {
  const { asFragment } = render(<ReactTestingLibrary text='Hello!' />);
  expect(asFragment()).toMatchSnapshot();
});

it('inserts text in h1', () => {
  const { getByTestId, getByText } = render(
    <ReactTestingLibrary text='Hello!' />
  );

  expect(getByTestId('h1tag')).toHaveTextContent('Hello!');
  expect(getByText('Hello!')).toHaveClass('fancy-h1');
});
