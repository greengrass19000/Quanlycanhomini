'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    accountType: DataTypes.STRING(10),
    username: DataTypes.STRING(20),
    password: DataTypes.STRING,
    firstName: DataTypes.STRING(8),
    lastName: DataTypes.STRING(8),
    birthdate: DataTypes.DATE,
    phone: DataTypes.STRING(10),
    email: DataTypes.STRING(30)
  }, {
    sequelize,
    modelName: 'Account',
    timestamps: false
  });
  
  return Account;
};