'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Renter', {
      renterID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
          type: Sequelize.BLOB
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Renter');
  }
};