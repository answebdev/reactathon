import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactTransitionGroup from './ReactTransitionGroup';

// Basic Render Test
describe('React Transition Group', () => {
  test('renders react transition group component', () => {
    render(<ReactTransitionGroup />);
    screen.debug();
  });
});

// Test onClick to make sure button is working when clicked.
// Source: https://stackoverflow.com/questions/62844098/testing-a-simple-onclick-in-react-testing-library-not-working-times-called-alwa

it('should show page info modal when button is clicked', () => {
  const mockOnClick = jest.fn();
  const { getByTestId } = render(
    <ReactTransitionGroup onClick={mockOnClick()} />
  );

  const handleInfo = getByTestId('handle-info');
  fireEvent.click(handleInfo);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
