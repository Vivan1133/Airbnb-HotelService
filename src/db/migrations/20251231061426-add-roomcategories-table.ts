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
      CREATE TABLE IF NOT EXISTS ROOM_CATEGORIES (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        CATEGORY ENUM('BASIC', 'STANDARD', 'PREMIUM') NOT NULL,
        PRICE INT NOT NULL,
        HOTEL_ID INT NOT NULL,
        ROOM_LEFT INT NOT NULL,
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
      DROP TABLE IF EXISTS ROOM_CATEGORIES
    `)
  }
};
