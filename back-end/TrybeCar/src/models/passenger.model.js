const connection = require('../configs/connection');
const camelize = require('camelize');

const findAll = async () => {
  const [passengers] = await connection.execute('SELECT * FROM passengers;');
  return camelize(passengers);
};

module.exports = { findAll };