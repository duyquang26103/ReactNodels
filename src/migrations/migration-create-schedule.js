'use strict';
const {STRING} = require("sequelize");
module.exports = {
    up: async (queryInterface, {DATE, INTEGER, TEXT}) => {
        await queryInterface.createTable('schedules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER
            },
            currentNumber: {
                type: INTEGER
            },
            maxNumber: {
                type: INTEGER
            },
            date: {
                type: DATE
            },
            timeType: {
                type: STRING
            },
            doctorId: {
                type: INTEGER
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
        await queryInterface.dropTable('schedules');
    }
};