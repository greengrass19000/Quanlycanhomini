'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.Building
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contract.init({
    contractID: DataTypes.INTEGER(8),
    roomID: DataTypes.INTEGER(8),
    hostID: DataTypes.INTEGER(8),
    renterID: DataTypes.INTEGER(8),
    deposit:DataTypes.INTEGER(8),
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};