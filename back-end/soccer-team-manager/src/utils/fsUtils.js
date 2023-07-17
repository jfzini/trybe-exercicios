const fs = require('fs').promises;
const path = require('path');

const readData = async (pathname) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, `../${pathname}`), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log(`Erro na leitura do arquivo: ${error}`);
  }
};

const writeData = async (pathname, data) => {
  try {
    const currentData = await readData(pathname);
    const newData = JSON.stringify([...currentData, data]);

    await fs.writeFile(path.resolve(__dirname, `../${pathname}`), newData);
  } catch (error) {
    console.log(`Erro ao escrever arquivo: ${error}`);
  }
};

module.exports = { readData, writeData };