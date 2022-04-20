'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.Building
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Building.init({
    hostID: DataTypes.INTEGER(8),
    image: DataTypes.TEXT,
    district: DataTypes.TEXT,
    ward: DataTypes.TEXT,
    street: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Building',
    timestamps: false
  });
  return Building;
};