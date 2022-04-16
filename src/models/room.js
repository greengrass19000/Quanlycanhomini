'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.Building
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init({
    roomID: DataTypes.INTEGER(8),
    buildingID: DataTypes.INTEGER(8),
    floorNo: DataTypes.INTEGER(2),
    roomNo: DataTypes.INTEGER(3),
    rentalPrice: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.BLOB,
    limit: DataTypes.INTEGER(1),
    utilities: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};