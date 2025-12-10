
import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS hotels (
          id INT AUTO_INCREMENT PRIMARY KEY,
          NAME VARCHAR(255) NOT NULL,
          ADDRESS VARCHAR(255) NOT NULL,
          LOCATION VARCHAR(255) NOT NULL,
          RATING INT DEFAULT 0,
          RATING_COUNT INT DEFAULT 0,
          CREATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          UPDATED_AT TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
      `)
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
        DROP TABLE IF EXISTS hotels
      `)
  }
};
