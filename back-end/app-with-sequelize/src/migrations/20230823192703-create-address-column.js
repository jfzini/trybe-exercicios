'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'address', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Endereço não informado',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'address');
  }
};
