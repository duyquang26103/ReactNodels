'use strict';
module.exports = {
    up: async (queryInterface, {DATE, INTEGER, STRING, TEXT}) => {
        await queryInterface.createTable('clinics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER
            },
            name: {
                type: STRING
            },
            address: {
                type: STRING
            },
            description: {
                type: TEXT
            },
            image: {
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
        await queryInterface.dropTable('clinics');
    }
};