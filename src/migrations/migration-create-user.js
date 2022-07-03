'use strict';
module.exports = {
  up: async (queryInterface, {BOOLEAN, DATE, INTEGER, STRING}) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      email: {
        type: STRING
      },
      password: {
        type: STRING
      },
      firstName: {
        type: STRING
      },
      lastName: {
        type: STRING
      },
      address: {
        type: STRING
      },
      phoneNumber: {
        type: INTEGER
      },
      gender: {
        type: BOOLEAN
      },
      image: {
        type: STRING
      },
      roleId: {
        type: STRING
      },
      positionId: {
        type: STRING
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};