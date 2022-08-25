'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      test_test: {
        type: Sequelize.STRING
      },
      : {
        type: Sequelize.DATE
      },
      video_publishDate: {
        type: Sequelize.DATE
      },
      video_filetype: {
        type: Sequelize.STRING
      },
      video_length: {
        type: Sequelize.FLOAT
      },
      video_description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tests');
  }
};