'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, {STRING, TEXT}) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clinic.init({
    name:  STRING,
    address:  STRING,
    description:  TEXT,
    image: STRING,
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};