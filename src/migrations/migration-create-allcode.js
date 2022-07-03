'use strict';
module.exports = {
    up: async (queryInterface, {DATE, INTEGER, STRING}) => {
        await queryInterface.createTable('allcodes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER
            },
            key: {
                type: STRING
            },
            type: {
                type: STRING
            },
            valueEn: {
                type: STRING
            },
            valueVi: {
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
        await queryInterface.dropTable('allcodes');
    }
};