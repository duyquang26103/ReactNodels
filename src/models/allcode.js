'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, {STRING}) => {
  class AllCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AllCode.init({
    key:  STRING,
    type:  STRING,
    valueEn: STRING,
    valueVi: STRING,

  }, {
    sequelize,
    modelName: 'AllCode',
  });
  return AllCode;
};