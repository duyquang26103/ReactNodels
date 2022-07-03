'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, {STRING, TEXT}) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Specialty.init({
    name:  STRING,
    description:  TEXT,
    image:  STRING,
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};