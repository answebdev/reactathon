import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UsingState from './UsingState';

afterEach(cleanup);

// Basic Render Test
describe('Using State', () => {
  test('renders using state component', () => {
    render(<UsingState />);
    screen.debug();
  });
});

// SYNC Code Tests (testing the buttons)
it('displays date', () => {
  const { getByTestId, getByText } = render(<UsingState />);
  // Find the 'Click Here' button using 'getByText', then click it.
  fireEvent.click(getByText('Click Here'));
  // Use '12/25/2020' in 'toHaveTextContent' because when we click the 'Click Here' button, the text should be '12/25/2020'.
  expect(getByTestId('date')).toHaveTextContent('12/25/2020');
});

it('changes greeting', () => {
  const { getByTestId, getByText } = render(<UsingState />);
  // Find the 'Change Greeting' button using 'getByText', then click it.
  fireEvent.click(getByText('Change Greeting'));
  // Use 'Goodbye' in 'toHaveTextContent' because when we click the 'Change Greeting' button, the text should change to 'Goodbye'.
  expect(getByTestId('greeting')).toHaveTextContent('Goodbye');
});
