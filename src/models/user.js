'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, {BOOLEAN, STRING}) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email:  STRING,
    password:  STRING,
    firstName: STRING,
    lastName: STRING,
    address: STRING,
    phoneNumber: STRING,
    gender:  BOOLEAN,
    image: STRING,
    roleId:  STRING,
    positionId:  STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};