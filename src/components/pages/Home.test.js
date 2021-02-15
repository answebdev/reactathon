import React from 'react';
// import { render, screen, cleanup } from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

// Test React Apps With React Testing Library: https://www.robinwieruch.de/react-testing-library

// afterEach(cleanup);

it('renders home component', () => {
  const { getByTestId } = render(<Home />);
  const div = getByTestId('home-component');
  expect(div).toBeTruthy();
});

// describe('Home', () => {
//   test('renders home component', () => {
//     render(<Home />);
//     screen.debug();
//   });
// });
