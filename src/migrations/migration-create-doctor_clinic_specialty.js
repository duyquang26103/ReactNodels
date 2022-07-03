'use strict';
module.exports = {
    up: async (queryInterface, {DATE, INTEGER, STRING}) => {
        await queryInterface.createTable('doctor_clinic_specialty', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: INTEGER
            },
            doctorId: {
                type: INTEGER
            },
            clinicId: {
                type: STRING
            },
            specialtyId: {
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
        await queryInterface.dropTable('doctor_clinic_specialty');
    }
};