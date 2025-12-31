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
   await queryInterface.bulkInsert('Rooms', [
        { "id": 1, "hotel_id": 6, "room_category_id": 1, "booking_id": null, "room_number": 101, "date_of_avail": "2025-01-10" },
        { "id": 2, "hotel_id": 6, "room_category_id": 1, "booking_id": null, "room_number": 102, "date_of_avail": "2025-01-10" },
        { "id": 3, "hotel_id": 6, "room_category_id": 2, "booking_id": null, "room_number": 201, "date_of_avail": "2025-01-10" },
        { "id": 4, "hotel_id": 6, "room_category_id": 2, "booking_id": null, "room_number": 202, "date_of_avail": "2025-01-10" },
        { "id": 5, "hotel_id": 6, "room_category_id": 3, "booking_id": null, "room_number": 301, "date_of_avail": "2025-01-10" },
        { "id": 6, "hotel_id": 7, "room_category_id": 4, "booking_id": null, "room_number": 101, "date_of_avail": "2025-01-10" },
        { "id": 7, "hotel_id": 7, "room_category_id": 4, "booking_id": null, "room_number": 102, "date_of_avail": "2025-01-10" },
        { "id": 8, "hotel_id": 7, "room_category_id": 5, "booking_id": null, "room_number": 201, "date_of_avail": "2025-01-10" },
        { "id": 9, "hotel_id": 7, "room_category_id": 6, "booking_id": null, "room_number": 301, "date_of_avail": "2025-01-10" }
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
