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

const addNewData = async (pathname, data) => {
  try {
    const currentData = await readData(pathname);
    const newData = JSON.stringify([...currentData, data]);

    await fs.writeFile(path.resolve(__dirname, `../${pathname}`), newData);
  } catch (error) {
    console.log(`Erro ao escrever arquivo: ${error}`);
  }
};

const updateData = async (pathname, data) => {
  const currentData = await readData(pathname);
  const indexToUpdate = currentData.findIndex((item) => item.id === data.id);
  if (indexToUpdate === -1) throw new Error('Item não encontrado no banco de dados');
  currentData[indexToUpdate] = { ...currentData[indexToUpdate], ...data };
  const newData = JSON.stringify(currentData);

  await fs.writeFile(path.resolve(__dirname, `../${pathname}`), newData);
};

const deleteData = async (pathname, id) => {
  const currentData = await readData(pathname);
  const filteredData = currentData.filter((item) => item.id !== id);
  if (currentData.length === filteredData.length) throw new Error('Item não encontrado no banco de dados');

  const newData = JSON.stringify(filteredData);

  await fs.writeFile(path.resolve(__dirname, `../${pathname}`), newData);
};



module.exports = { readData, addNewData, updateData, deleteData };