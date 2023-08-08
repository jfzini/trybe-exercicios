const camelize = require('camelize');
const connection = require('../configs/connection');

const findAll = async () => {
  const [passengers] = await connection.execute('SELECT * FROM passengers;');
  return camelize(passengers);
};

const findById = async (id) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?;',
    [id],
  );
  return camelize(passenger);
};

module.exports = { findAll, findById };