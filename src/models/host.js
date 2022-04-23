'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Host extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Host.init({
    contact: DataTypes.TEXT,
    property:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Host',
    timestamps: false
  }, {
    slug: {
      type: DataTypes.STRING,
      unique: true
  }
  });
  return Host;
};