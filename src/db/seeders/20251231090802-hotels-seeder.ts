'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : QueryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Hotels', [
      {
        "name": "Grand Palace",
        "location": "MG Road",
        "city": "Bangalore",
        "state": "Karnataka",
        "pincode": 560001,
        "rating": 4,
        "rating_Count": 120,
        "managerId": 101,
        "description": "Luxury hotel in the heart of the city",
      },
      {
        "name": "Sea View Resort",
        "location": "Calangute Beach",
        "city": "Goa",
        "state": "Goa",
        "pincode": 403516,
        "rating": 5,
        "rating_Count": 95,
        "managerId": 102,
        "description": "Beach-facing resort with premium amenities",
      }
    ])
  },

  async down (queryInterface : QueryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
