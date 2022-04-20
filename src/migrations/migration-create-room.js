'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Room', {
      roomID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buildingID: {
          allowNull:false,
          type: Sequelize.INTEGER
      },
      floorNo: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      roomNo: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.BLOB
      },
      limit: {
        type: Sequelize.INTEGER
      },
      utilities: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.TEXT
      },
      timestamps: false 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Room');
  }
};