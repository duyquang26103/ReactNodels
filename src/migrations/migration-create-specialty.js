'use strict';
const {STRING} = require("sequelize");
module.exports = {
    up: async (queryInterface, {DATE, INTEGER, TEXT}) => {
        await queryInterface.createTable('specialties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER
            },
            image: {
                type: STRING
            },
            name: {
                type: STRING
            },
            description: {
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
        await queryInterface.dropTable('specialties');
    }
};