import { QueryInterface } from 'sequelize';
module.exports = {
  async up(queryInterface: QueryInterface) {
    // raw query
    await queryInterface.sequelize.query(`
      ALTER TABLE ROOMS ADD COLUMN PRICE INT NOT NULL DEFAULT 0;
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE ROOMS DROP COLUMN PRICE;
    `);
  },
};