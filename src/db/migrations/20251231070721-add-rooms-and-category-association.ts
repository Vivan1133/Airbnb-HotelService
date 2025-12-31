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

    await queryInterface.addConstraint('ROOMS', {
      type: "foreign key",
      name: "hotel_id-f-key-constraint",
      fields: ["HOTEL_ID"],
      references: {
        table: "HOTELS",
        field: "ID"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });

    await queryInterface.addConstraint('ROOMS', {
      type: "foreign key",
      name: "room_category-id-f-key-constraint",
      fields: ["ROOM_CATEGORY_ID"],
      references: {
        table: "ROOM_CATEGORIES",
        field: "ID"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })

    await queryInterface.addConstraint('ROOM_CATEGORIES', {
      type: "foreign key",
      name: "hotel_id-f-key-constraint-in-room-categories",
      fields: ["HOTEL_ID"],
      references: {
        table: "HOTELS",
        field: "ID"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })

  },

  async down (queryInterface : QueryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('ROOMS', "hotel_id-f-key-constraint");
    await queryInterface.removeConstraint('ROOMS', "room_category-id-f-key-constraint");
    await queryInterface.removeConstraint('ROOM_CATEGORIES', "hotel_id-f-key-constraint-in-room-categories");
  }
};
