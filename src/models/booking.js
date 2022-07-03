'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, {DATE, INTEGER, STRING}) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    statusId:  STRING,
    doctorId:  INTEGER,
    patientId: INTEGER,
    date: DATE,
    timeType: STRING,

  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};