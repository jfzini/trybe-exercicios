const math = require('./math');
// jest.mock("./math");

// test("#somar", () => {
//   // Aqui testamos se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });

// test("#somar", () => {
//   // testando a implementação original, o mock e o mock resetado

//   // implementação original
//   expect(math.somar(1, 2)).resolves.toBe(3);

//   // criando o mock e substituindo a implementação para uma subtração
//   math.somar = jest.fn().mockImplementation((a, b) => a - b);

//   math.somar(5, 1);
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar(5, 1)).toBe(4);
//   expect(math.somar).toHaveBeenCalledTimes(2);
//   expect(math.somar).toHaveBeenLastCalledWith(5, 1);

//   // resetando o mock
//   math.somar.mockReset();
//   expect(math.somar(1, 2)).toBe(undefined); // *****************limitação do jest.fn*******************
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenLastCalledWith(1, 2);
// });

// test("#somar", () => {
//   // testando a implementação original, o mock e a restauração da função original

//   // implementação original
//   expect(math.somar(1, 2)).resolves.toBe(3); //como é uma promessa, é necessário o resolves.

//   // criando o mock e substituindo a implementação para uma subtração
//   const mockSomar = jest
//     .spyOn(math, "somar")
//     .mockImplementation((a, b) => a - b);

//   math.somar(5, 1);
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar(5, 1)).toBe(4);
//   expect(mockSomar).toHaveBeenCalledTimes(2);
//   expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

//   // restaurando a implementação original
//   math.somar.mockRestore();
//   expect(math.somar(1, 2)).resolves.toBe(3);
// });

//Outra possibilidade do spyOn

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3); //como é uma promessa, é necessário o resolves.

  // criando o mock e substituindo a implementação para uma subtração
  jest.spyOn(math, "somar").mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});