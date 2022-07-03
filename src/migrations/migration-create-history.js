'use strict';
module.exports = {
    up: async (queryInterface, {DATE, INTEGER, TEXT}) => {
        await queryInterface.createTable('histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER
            },
            patientId: {
                type: INTEGER
            },
            doctorId: {
                type: INTEGER
            },
            description: {
                type: TEXT
            },
            files: {
                type: TEXT
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
        await queryInterface.dropTable('histories');
    }
};