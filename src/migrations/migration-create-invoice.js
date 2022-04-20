'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roomID: {
          allowNull:false,
          type: Sequelize.INTEGER
      },
      type: {
          type: Sequelize.TEXT
      },
      price: {
          type: Sequelize.INTEGER
      },
      time: {
          type: Sequelize.DATE
      },
      description: {
          type: Sequelize.TEXT
      },
      timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Invoice');
  }
};