'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Building', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostID: {
          type: Sequelize.INTEGER
      },
      district: {
          type: Sequelize.TEXT
      },
      ward: {
        type: Sequelize.TEXT
    },
      street: {
        type: Sequelize.TEXT
    },
      timestamps: false
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Building');
  }
};