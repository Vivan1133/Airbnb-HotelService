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
    await queryInterface.bulkInsert('room_categories', [
      {
        "id": 1,
        "category": "BASIC",
        "price": 2000,
        "hotel_id": 6,
        "room_left": 10
      },
      {
        "id": 2,
        "category": "STANDARD",
        "price": 3500,
        "hotel_id": 6,
        "room_left": 8
      },
      {
        "id": 3,
        "category": "PREMIUM",
        "price": 6000,
        "hotel_id": 6,
        "room_left": 5
      },
      {
        "id": 4,
        "category": "BASIC",
        "price": 2500,
        "hotel_id": 7,
        "room_left": 12
      },
      {
        "id": 5,
        "category": "STANDARD",
        "price": 4000,
        "hotel_id": 7,
        "room_left": 9
      },
      {
        "id": 6,
        "category": "PREMIUM",
        "price": 7000,
        "hotel_id": 7,
        "room_left": 6
      }])
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
