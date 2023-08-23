'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        full_name: 'Sara Kubitschek',
        email: 'sarakbt@gmail.com',
        address: 'Rua dos Bobos, 0',
      },
      {
        full_name: 'João Grilo',
        email: 'joaogrilo@gmail.com',
        address: 'Rua dos Bobos, 10',
      },
      {
        full_name: 'Chicó',
        email: 'chicozim@miguezim.com',
        address: 'Não sei, só sei que foi assim',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
