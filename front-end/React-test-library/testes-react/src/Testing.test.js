import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { click } from '@testing-library/user-event/dist/click';

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);
let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test("#divisivelPorDois", () => {
  // testando se a função foi chamada e qual seu retorno
  divisivelPorDois = jest.fn().mockReturnValue(true);

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
  expect(divisivelPorDois()).toBe(true);
});