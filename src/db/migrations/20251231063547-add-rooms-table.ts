'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : QueryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ROOMS (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        HOTEL_ID INT NOT NULL,
        ROOM_CATEGORY_ID INT NOT NULL,
        BOOKING_ID INT,
        ROOM_NUMBER INT NOT NULL,
        DATE_OF_AVAIL DATETIME,
        CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
        UPDATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        DELETED_AT DATETIME DEFAULT NULL
      )
    `)

  },

  async down (queryInterface : QueryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ROOMS
    `)

  }
};
