import { render, screen } from '@testing-library/react';
import App from './App';

it(`should have an email input with the label 'Email' associated with it`, () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/^email$/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveProperty('type', 'email')
});

//another possibility if the element doesnt have a label
it(`should have an email input with the label 'Email' associated with it`, () => {
  render(<App />);
  const inputElement = screen.getAllByRole('textbox'); // to check a role of an HTML element https://www.w3.org/TR/html-aria/#docconformance
  expect(inputElement).toHaveLength(2);
});
