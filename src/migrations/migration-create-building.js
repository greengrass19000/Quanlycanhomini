'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Building', {
      buildingID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostID: {
          type: Sequelize.INTEGER
      },
      address: {
          type: Sequelize.TEXT
      },
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Building');
  }
};