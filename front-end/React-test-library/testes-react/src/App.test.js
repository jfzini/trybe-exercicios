import { render, screen } from '@testing-library/react';
import App from './App';

it(`should have an email input with the label 'Email' associated with it`, () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/^email$/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveProperty('type', 'email')
});
