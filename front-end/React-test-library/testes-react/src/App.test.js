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
it(`should have a text input with the value of 'João Felipe Zini'`, async () => {
  render(<App />);
  const inputName = screen.getByTestId('id-name');
  const button = screen.getByTestId('render-button');
  const noRenderName = screen.queryByTestId('username-p');
  expect(noRenderName).not.toBeInTheDocument();

  userEvent.type(inputName, 'João Felipe Zini');
  await userEvent.click(button);

  const renderName = screen.getByTestId('username-p');
  expect(inputName).toHaveValue('João Felipe Zini');
  expect(renderName).toHaveTextContent(/^João Felipe Zini$/);
});
