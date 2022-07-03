'use strict';
module.exports = {
    up: async (queryInterface, {DATE, INTEGER, STRING}) => {
        await queryInterface.createTable('bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER
            },
            statusId: {
                type: STRING
            },
            doctorId: {
                type: INTEGER
            },
            patientId: {
                type: INTEGER
            },
            date: {
                type: DATE
            },
            timeType: {
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
        await queryInterface.dropTable('bookings');
    }
};