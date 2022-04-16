'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contract', {
      contractID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hostID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      renterID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      deposit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      startTime: {
          allowNull: false,
          type: Sequelize.DATE
      },
      endTime: {
        allowNull: false,
        type: Sequelize.DATE 
      },
      description: {
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contract');
  }
};