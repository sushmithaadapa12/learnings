'use strict';
const {DataTypes} = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('shoots',{
      shoot_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      from_date: {
          type: DataTypes.DATE,
          allowNull: false,
      },
      to_date: {
          type: DataTypes.DATE,
          allowNull: false,
      },
      shoot_location: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      job_production_id: { // Add the public_id column
          type: DataTypes.UUID,
          allowNull: false,
      },
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('shoots');
  }
};
