'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('User.models', 'users');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('users', 'User.models');
  }
};
