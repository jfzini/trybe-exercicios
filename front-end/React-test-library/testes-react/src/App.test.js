import { render, screen } from '@testing-library/react';
import App from './App';

it(`should have an email input with the label 'Email' associated with it`, () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/^email$/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveProperty('type', 'email')
});

//another possibility if the element doesnt have a label
it(`should have two inputs`, () => {
  render(<App />);
  const inputElements = screen.getAllByRole('textbox'); // to check a role of an HTML element https://www.w3.org/TR/html-aria/#docconformance
  expect(inputElements).toHaveLength(2);
});

//test
it(`should have a text input with the value of 'João Felipe Zini'`, () => {
  render(<App />);
  const inputName = screen.getByTestId('id-name'); // to check a role of an HTML element https://www.w3.org/TR/html-aria/#docconformance
  expect(inputName).toHaveValue('João Felipe Zini');
});
