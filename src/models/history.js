'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, {INTEGER, TEXT}) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    patientId:  INTEGER,
    doctorId:  INTEGER,
    description: TEXT,
    files: TEXT
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};