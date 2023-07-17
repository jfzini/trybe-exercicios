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

module.exports = { readData };