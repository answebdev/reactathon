import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UsingState from './UsingState';
import UsingStateOther from './UsingStateOther';

afterEach(cleanup);

// Basic Render Test
describe('Using State', () => {
  test('renders using state component', () => {
    render(<UsingState />);
    screen.debug();
  });
});

// Unit tests: One assertion (one 'expect') per test.
// (For functional testing - those that test behavior - you are often doing a series of actions,
// e.g., click a button and then click a checkbox, and you need this all to be in the same test,
// even though you may have assertions in between; so you can be more liberal with having more assertions in the same test
// in functional testing).

test('change greeting button has correct color', () => {
  render(<UsingStateOther />);
  // Find the button, using the global object, 'screen', which has access to the virtual DOM created by 'render'.
  // Find an element with a role of 'button' and text of 'Change Greeting'.
  const colorButton = screen.getByRole('button', { name: 'Change Greeting' });
  // Expect the background color to be primary.
  expect(colorButton).toHaveStyle({ backgroundColor: 'steelblue' });
});

test('button changes color to blue when clicked', () => {
  render(<UsingStateOther />);
  // Find an element with a role of 'button' and text of 'Change Color to blue'.
  const colorButton = screen.getByRole('button', {
    name: 'Change Color to blue',
  });
  // Click the button.
  fireEvent.click(colorButton);
  // Expect background of button to change to blue.
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  // Expect the button text to change to 'Change Color to red'.
  expect(colorButton.textContent).toBe('Change Color to red');
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

// Button / Checkbox Tests.
test('initial conditions', () => {
  render(<UsingStateOther />);
  // Find button.
  const button = screen.getByRole('button', { name: 'Change Color to blue' });
  // Check that button is enabled: use the 'toBeEnabled()' matcher.
  // If you're not sure which matcher to use, check the 'Jest DOM' docs: https://github.com/testing-library/jest-dom
  expect(button).toBeEnabled();
  // Find the checkbox (a checkbox's role is 'checkbox').
  const checkbox = screen.getByRole('checkbox');
  // Check that the checkbox starts out unchecked.
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<UsingStateOther />);
  // Define checkbox and button.
  //   const checkbox = screen.getByRole('checkbox');

  // We can also use the 'name' option on a checkbox, as we do with buttons:
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // This line makes the test fail -->
  // TestingLibraryElementError: Found multiple elements with the role "button" (because this is also done above)
  // const button = screen.getByRole('button');
  // Instead, use 'getByText' to get it to pass:
  // const button = screen.getByText('Change Color to blue');

  // Or we can specify which button by adding the name:
  const button = screen.getByRole('button', { name: 'Change Color to blue' });

  // Fire click event on checkbox and expect button to be disabled.
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  // Fire click event on checkbox and expect button to be enabled.
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<UsingStateOther />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change Color to blue' });

  // Disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray');

  // Re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: red');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<UsingStateOther />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change Color to blue' });

  // Change button to blue
  fireEvent.click(button);

  // Disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray');

  // Re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: blue');
});
