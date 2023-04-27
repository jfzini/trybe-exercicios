import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { click } from '@testing-library/user-event/dist/click';

it(`should have an email input with the label 'Email' associated with it`, () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/^email$/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveProperty('type', 'email')
});

it(`should have two inputs`, () => {
  render(<App />);
  const inputElements = screen.getAllByRole('textbox'); // to check a role of an HTML element https://www.w3.org/TR/html-aria/#docconformance
  expect(inputElements).toHaveLength(2);
});

//testing toHaveValue and getByTestId
it(`should have a text input with the value of 'João Felipe Zini'`, () => {
  render(<App />);
  const inputName = screen.getByTestId('id-name');
  const button = screen.getByRole('button');
  const renderName = screen.queryByTestId('username-p');
  expect(renderName).not.toBeInTheDocument();

  // userEvent.type(inputName, 'João Felipe Zini');
  // expect(inputName).toHaveValue('João Felipe Zini');
});
