'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('Male', 'Female')
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      occupation: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      currency: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(45)
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
    await queryInterface.dropTable('users');
  }
};