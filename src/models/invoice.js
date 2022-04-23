'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.Building
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoice.init({
    roomID: DataTypes.INTEGER(8),
    type: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    time: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Invoice',
    timestamps: false
  }, {
    slug: {
      type: DataTypes.STRING,
      unique: true
  }
  });
  return Invoice;
};